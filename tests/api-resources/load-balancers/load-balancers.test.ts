// File generated from our OpenAPI spec by Stainless.

import Hetzner from 'hetzner';
import { Response } from 'node-fetch';

const hetzner = new Hetzner({ apiToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource loadBalancers', () => {
  test('create: only required params', async () => {
    const responsePromise = hetzner.loadBalancers.create({
      algorithm: { type: 'least_connections' },
      load_balancer_type: 'lb11',
      name: 'Web Frontend',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await hetzner.loadBalancers.create({
      algorithm: { type: 'least_connections' },
      load_balancer_type: 'lb11',
      name: 'Web Frontend',
      labels: { foo: 'string' },
      location: 'string',
      network: 123,
      network_zone: 'eu-central',
      public_interface: true,
      services: [
        {
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
          http: {
            certificates: [0, 0, 0],
            cookie_lifetime: 300,
            cookie_name: 'HCLBSTICKY',
            redirect_http: true,
            sticky_sessions: true,
          },
          listen_port: 443,
          protocol: 'https',
          proxyprotocol: false,
        },
        {
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
          http: {
            certificates: [0, 0, 0],
            cookie_lifetime: 300,
            cookie_name: 'HCLBSTICKY',
            redirect_http: true,
            sticky_sessions: true,
          },
          listen_port: 443,
          protocol: 'https',
          proxyprotocol: false,
        },
        {
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
          http: {
            certificates: [0, 0, 0],
            cookie_lifetime: 300,
            cookie_name: 'HCLBSTICKY',
            redirect_http: true,
            sticky_sessions: true,
          },
          listen_port: 443,
          protocol: 'https',
          proxyprotocol: false,
        },
      ],
      targets: [
        {
          health_status: [
            { listen_port: 443, status: 'healthy' },
            { listen_port: 443, status: 'healthy' },
            { listen_port: 443, status: 'healthy' },
          ],
          ip: { ip: '203.0.113.1' },
          label_selector: { selector: 'env=prod' },
          server: { id: 42 },
          targets: [
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
          ],
          type: 'ip',
          use_private_ip: true,
        },
        {
          health_status: [
            { listen_port: 443, status: 'healthy' },
            { listen_port: 443, status: 'healthy' },
            { listen_port: 443, status: 'healthy' },
          ],
          ip: { ip: '203.0.113.1' },
          label_selector: { selector: 'env=prod' },
          server: { id: 42 },
          targets: [
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
          ],
          type: 'ip',
          use_private_ip: true,
        },
        {
          health_status: [
            { listen_port: 443, status: 'healthy' },
            { listen_port: 443, status: 'healthy' },
            { listen_port: 443, status: 'healthy' },
          ],
          ip: { ip: '203.0.113.1' },
          label_selector: { selector: 'env=prod' },
          server: { id: 42 },
          targets: [
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
            {
              health_status: [
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
                { listen_port: 443, status: 'healthy' },
              ],
              server: { id: 42 },
              type: 'server',
              use_private_ip: true,
            },
          ],
          type: 'ip',
          use_private_ip: true,
        },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = hetzner.loadBalancers.retrieve(0);
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
    await expect(hetzner.loadBalancers.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = hetzner.loadBalancers.update(0);
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
    await expect(hetzner.loadBalancers.update(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.loadBalancers.update(
        0,
        { labels: { foo: 'string' }, name: 'new-name' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = hetzner.loadBalancers.list();
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
    await expect(hetzner.loadBalancers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hetzner.loadBalancers.list(
        { label_selector: 'string', name: 'string', page: 1, per_page: 1, sort: 'id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hetzner.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = hetzner.loadBalancers.del(0);
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
    await expect(hetzner.loadBalancers.del(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hetzner.NotFoundError,
    );
  });
});
