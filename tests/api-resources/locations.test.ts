// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { Response } from 'node-fetch';

const hetzner = new Hetzner({ apiToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource locations', () => {
  test('retrieve', async () => {
    const responsePromise = hetzner.locations.retrieve(0);
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
    await expect(hetzner.locations.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = hetzner.locations.list();
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
    await expect(hetzner.locations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.locations.list(
        { name: 'string', page: 0, per_page: 0, sort: 'id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });
});
