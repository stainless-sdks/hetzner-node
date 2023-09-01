// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { Response } from 'node-fetch';

const hetzner = new Hetzner({ apiToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource actions', () => {
  test('retrieve', async () => {
    const responsePromise = hetzner.loadBalancers.actions.retrieve(0, 0);
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
      hetzner.loadBalancers.actions.retrieve(0, 0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = hetzner.loadBalancers.actions.list(0);
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
    await expect(hetzner.loadBalancers.actions.list(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.loadBalancers.actions.list(
        0,
        { page: 1, per_page: 1, sort: 'id', status: 'running' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('addService: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.addService(0, {
      destination_port: 80,
      health_check: { interval: 15, port: 4711, protocol: 'http', retries: 3, timeout: 10 },
      listen_port: 443,
      protocol: 'https',
      proxyprotocol: false,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addService: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.addService(0, {
      destination_port: 80,
      health_check: {
        http: {
          domain: 'example.com',
          path: '/',
          response: '{"status": "ok"}',
          status_codes: ['string', 'string', 'string'],
          tls: false,
        },
        interval: 15,
        port: 4711,
        protocol: 'http',
        retries: 3,
        timeout: 10,
      },
      listen_port: 443,
      protocol: 'https',
      proxyprotocol: false,
      http: {
        certificates: [0, 0, 0],
        cookie_lifetime: 300,
        cookie_name: 'HCLBSTICKY',
        redirect_http: true,
        sticky_sessions: true,
      },
    });
  });

  test('assTarget: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.assTarget(0, { type: 'ip' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('assTarget: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.assTarget(0, {
      type: 'ip',
      ip: { ip: '203.0.113.1' },
      label_selector: { selector: 'env=prod' },
      server: { id: 80 },
      use_private_ip: true,
    });
  });

  test('attachToNetwork: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.attachToNetwork(0, { network: 4711 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('attachToNetwork: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.attachToNetwork(0, {
      network: 4711,
      ip: '10.0.1.1',
    });
  });

  test('changeAlgorithm: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.changeAlgorithm(0, { type: 'least_connections' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changeAlgorithm: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.changeAlgorithm(0, { type: 'least_connections' });
  });

  test('changeDNSPtr: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.changeDNSPtr(0, {
      dns_ptr: 'lb1.example.com',
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

  test('changeDNSPtr: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.changeDNSPtr(0, {
      dns_ptr: 'lb1.example.com',
      ip: '1.2.3.4',
    });
  });

  test('changeProtection', async () => {
    const responsePromise = hetzner.loadBalancers.actions.changeProtection(0);
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
      hetzner.loadBalancers.actions.changeProtection(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('changeProtection: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.loadBalancers.actions.changeProtection(
        0,
        { delete: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('changeType: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.changeType(0, { load_balancer_type: 'lb21' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changeType: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.changeType(0, { load_balancer_type: 'lb21' });
  });

  test('deleteService: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.deleteService(0, { listen_port: 4711 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteService: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.deleteService(0, { listen_port: 4711 });
  });

  test('detachFromNetwork: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.detachFromNetwork(0, { network: 4711 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('detachFromNetwork: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.detachFromNetwork(0, { network: 4711 });
  });

  test('disablePublicInterface', async () => {
    const responsePromise = hetzner.loadBalancers.actions.disablePublicInterface(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('disablePublicInterface: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.loadBalancers.actions.disablePublicInterface(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('enablePublicInterface', async () => {
    const responsePromise = hetzner.loadBalancers.actions.enablePublicInterface(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enablePublicInterface: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.loadBalancers.actions.enablePublicInterface(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('removeTarget: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.removeTarget(0, { type: 'ip' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeTarget: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.removeTarget(0, {
      type: 'ip',
      ip: { ip: '203.0.113.1' },
      label_selector: { selector: 'env=prod' },
      server: { id: 80 },
    });
  });

  test('updateService: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.actions.updateService(0, {
      destination_port: 80,
      health_check: { interval: 15, port: 4711, protocol: 'http', retries: 3, timeout: 10 },
      listen_port: 443,
      protocol: 'https',
      proxyprotocol: false,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateService: required and optional params', async () => {
    const response = await hetzner.loadBalancers.actions.updateService(0, {
      destination_port: 80,
      health_check: {
        http: {
          domain: 'example.com',
          path: '/',
          response: '{"status": "ok"}',
          status_codes: ['string', 'string', 'string'],
          tls: false,
        },
        interval: 15,
        port: 4711,
        protocol: 'http',
        retries: 3,
        timeout: 10,
      },
      listen_port: 443,
      protocol: 'https',
      proxyprotocol: false,
      http: {
        certificates: [0, 0, 0],
        cookie_lifetime: 300,
        cookie_name: 'HCLBSTICKY',
        redirect_http: true,
        sticky_sessions: true,
      },
    });
  });
});
