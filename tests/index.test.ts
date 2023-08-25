// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { APIUserAbortError } from 'hetzner';
import { Headers } from 'hetzner/core';
import { Response, fetch as defaultFetch, type RequestInit, type RequestInfo } from 'hetzner/_shims/fetch';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  describe('defaultHeaders', () => {
    const client = new Hetzner({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      apiToken: 'my api token',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['X-My-Default-Header']).toEqual('2');
    });

    test('can be overriden with `undefined`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });

    test('can be overriden with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Hetzner({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        apiToken: 'my api token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Hetzner({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        apiToken: 'my api token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Hetzner({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        apiToken: 'my api token',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Hetzner({
      baseURL: 'http://localhost:5000/',
      apiToken: 'my api token',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  test('custom signal', async () => {
    const client = new Hetzner({
      baseURL: 'http://127.0.0.1:4010',
      apiToken: 'my api token',
      fetch: (...args) => {
        return new Promise((resolve, reject) =>
          setTimeout(
            () =>
              defaultFetch(...args)
                .then(resolve)
                .catch(reject),
            300,
          ),
        );
      },
    });

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 200);

    const spy = jest.spyOn(client, 'request');

    await expect(client.get('/foo', { signal: controller.signal })).rejects.toThrowError(APIUserAbortError);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Hetzner({ baseURL: 'http://localhost:5000/custom/path/', apiToken: 'my api token' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Hetzner({ baseURL: 'http://localhost:5000/custom/path', apiToken: 'my api token' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Hetzner({ maxRetries: 1, apiToken: 'my api token' });
    expect(client.maxRetries).toEqual(1);

    // default
    const client2 = new Hetzner({ apiToken: 'my api token' });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with minimal arguments', () => {
    // set API Token via env var
    process.env['HETZNER_API_TOKEN'] = 'env var api token';
    const client = new Hetzner();
    expect(client.apiToken).toBe('env var api token');
  });

  test('with apiToken argument', () => {
    process.env['HETZNER_API_TOKEN'] = 'env var api token';

    const client = new Hetzner({ apiToken: 'another api token' });
    expect(client.apiToken).toBe('another api token');
  });

  test('with options argument', () => {
    process.env['HETZNER_API_TOKEN'] = 'env var api token';

    // apiToken
    const client = new Hetzner({ apiToken: 'my api token' });
    expect(client.apiToken).toBe('my api token');
  });

  test('with disabled authentication', () => {
    // fails if no API Token provided
    expect(() => {
      new Hetzner();
    }).toThrow();
  });
});

describe('request building', () => {
  const client = new Hetzner({ apiToken: 'my api token' });

  describe('Content-Length', () => {
    test('handles multi-byte characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: '—' } });
      expect((req.headers as Record<string, string>)['Content-Length']).toEqual('20');
    });

    test('handles standard characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: 'hello' } });
      expect((req.headers as Record<string, string>)['Content-Length']).toEqual('22');
    });
  });
});

describe('retries', () => {
  test('single retry', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (!count++)
        return new Promise((resolve, reject) =>
          signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Hetzner({ apiToken: 'my api token', timeout: 2000, fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  }, 10000);
});
