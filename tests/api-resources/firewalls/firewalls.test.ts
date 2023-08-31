// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { Response } from 'node-fetch';

const hetzner = new Hetzner({ apiToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource firewalls', () => {
  test('create: only required params', async () => {
    const responsePromise = hetzner.firewalls.create({ name: 'Corporate Intranet Protection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await hetzner.firewalls.create({
      name: 'Corporate Intranet Protection',
      apply_to: [
        { label_selector: { selector: 'env=prod' }, server: { id: 42 }, type: 'label_selector' },
        { label_selector: { selector: 'env=prod' }, server: { id: 42 }, type: 'label_selector' },
        { label_selector: { selector: 'env=prod' }, server: { id: 42 }, type: 'label_selector' },
      ],
      labels: { foo: 'string' },
      rules: [
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'esp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'esp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'esp',
          source_ips: ['string', 'string', 'string'],
        },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = hetzner.firewalls.retrieve(0);
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
    await expect(hetzner.firewalls.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = hetzner.firewalls.update(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(hetzner.firewalls.update(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.firewalls.update(
        0,
        { labels: { foo: 'string' }, name: 'new-name' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = hetzner.firewalls.list();
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
    await expect(hetzner.firewalls.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.firewalls.list(
        { label_selector: 'string', name: 'string', page: 1, per_page: 1, sort: 'id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = hetzner.firewalls.del(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(hetzner.firewalls.del(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });
});
