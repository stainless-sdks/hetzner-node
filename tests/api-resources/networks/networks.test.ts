// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { Response } from 'node-fetch';

const hetzner = new Hetzner({ apiToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource networks', () => {
  test('create: only required params', async () => {
    const responsePromise = hetzner.networks.create({ ip_range: '10.0.0.0/16', name: 'mynet' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await hetzner.networks.create({
      ip_range: '10.0.0.0/16',
      name: 'mynet',
      expose_routes_to_vswitch: false,
      labels: { labelkey: 'value' },
      routes: [
        { destination: '10.100.1.0/24', gateway: '10.0.1.1' },
        { destination: '10.100.1.0/24', gateway: '10.0.1.1' },
        { destination: '10.100.1.0/24', gateway: '10.0.1.1' },
      ],
      subnets: [
        { ip_range: '10.0.1.0/24', network_zone: 'eu-central', type: 'cloud', vswitch_id: 1000 },
        { ip_range: '10.0.1.0/24', network_zone: 'eu-central', type: 'cloud', vswitch_id: 1000 },
        { ip_range: '10.0.1.0/24', network_zone: 'eu-central', type: 'cloud', vswitch_id: 1000 },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = hetzner.networks.retrieve(0);
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
    await expect(hetzner.networks.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = hetzner.networks.update(0);
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
    await expect(hetzner.networks.update(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.networks.update(
        0,
        { expose_routes_to_vswitch: false, labels: { labelkey: 'value' }, name: 'new-name' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = hetzner.networks.list();
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
    await expect(hetzner.networks.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.networks.list(
        { label_selector: 'string', name: 'string', page: 0, per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = hetzner.networks.del(0);
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
    await expect(hetzner.networks.del(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });
});
