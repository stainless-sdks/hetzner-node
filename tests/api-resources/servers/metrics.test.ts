// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { Response } from 'node-fetch';

const hetzner = new Hetzner({ apiToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource metrics', () => {
  test('list: only required params', async () => {
    const responsePromise = hetzner.servers.metrics.list(0, { end: 'string', start: 'string', type: 'cpu' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await hetzner.servers.metrics.list(0, {
      end: 'string',
      start: 'string',
      type: 'cpu',
      step: 'string',
    });
  });
});
