// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { Response } from 'node-fetch';

const hetzner = new Hetzner({ apiToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource actions', () => {
  test('retrieve', async () => {
    const responsePromise = hetzner.firewalls.actions.retrieve(0, 0);
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
      hetzner.firewalls.actions.retrieve(0, 0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = hetzner.firewalls.actions.list(0);
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
    await expect(hetzner.firewalls.actions.list(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.firewalls.actions.list(
        0,
        { page: 0, per_page: 0, sort: 'id', status: 'running' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('applyToResources: only required params', async () => {
    const responsePromise = hetzner.firewalls.actions.applyToResources(0, { apply_to: [{}, {}, {}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('applyToResources: required and optional params', async () => {
    const response = await hetzner.firewalls.actions.applyToResources(0, {
      apply_to: [
        { label_selector: { selector: 'env=prod' }, server: { id: 0 }, type: 'server' },
        { label_selector: { selector: 'env=prod' }, server: { id: 0 }, type: 'server' },
        { label_selector: { selector: 'env=prod' }, server: { id: 0 }, type: 'server' },
      ],
    });
  });

  test('removeFromResources: only required params', async () => {
    const responsePromise = hetzner.firewalls.actions.removeFromResources(0, { remove_from: [{}, {}, {}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeFromResources: required and optional params', async () => {
    const response = await hetzner.firewalls.actions.removeFromResources(0, {
      remove_from: [
        { label_selector: { selector: 'env=prod' }, server: { id: 0 }, type: 'server' },
        { label_selector: { selector: 'env=prod' }, server: { id: 0 }, type: 'server' },
        { label_selector: { selector: 'env=prod' }, server: { id: 0 }, type: 'server' },
      ],
    });
  });

  test('setRules: only required params', async () => {
    const responsePromise = hetzner.firewalls.actions.setRules(0, {
      rules: [
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
        { direction: 'in', protocol: 'tcp' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setRules: required and optional params', async () => {
    const response = await hetzner.firewalls.actions.setRules(0, {
      rules: [
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
        {
          description: 'string',
          destination_ips: ['string', 'string', 'string'],
          direction: 'in',
          port: '80',
          protocol: 'tcp',
          source_ips: ['string', 'string', 'string'],
        },
      ],
    });
  });
});
