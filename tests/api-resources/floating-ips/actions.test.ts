// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { Response } from 'node-fetch';

const hetzner = new Hetzner({ apiToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource actions', () => {
  test('retrieve', async () => {
    const responsePromise = hetzner.floatingIps.actions.retrieve(0, 0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.floatingIps.actions.retrieve(0, 0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = hetzner.floatingIps.actions.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(hetzner.floatingIps.actions.list(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.floatingIps.actions.list(
        0,
        { page: 0, per_page: 0, sort: 'id', status: 'running' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('assign: only required params', async () => {
    const responsePromise = hetzner.floatingIps.actions.assign(0, { server: 42 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('assign: required and optional params', async () => {
    const response = await hetzner.floatingIps.actions.assign(0, { server: 42 });
  });

  test('changeDnsPtr: only required params', async () => {
    const responsePromise = hetzner.floatingIps.actions.changeDnsPtr(0, {
      dns_ptr: 'server02.example.com',
      ip: '1.2.3.4',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changeDnsPtr: required and optional params', async () => {
    const response = await hetzner.floatingIps.actions.changeDnsPtr(0, {
      dns_ptr: 'server02.example.com',
      ip: '1.2.3.4',
    });
  });

  test('changeProtection', async () => {
    const responsePromise = hetzner.floatingIps.actions.changeProtection(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changeProtection: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.floatingIps.actions.changeProtection(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('changeProtection: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.floatingIps.actions.changeProtection(0, { delete: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('unassign', async () => {
    const responsePromise = hetzner.floatingIps.actions.unassign(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unassign: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.floatingIps.actions.unassign(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });
});
