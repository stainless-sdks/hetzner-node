// File generated from our OpenAPI spec by Stainless.

import type { Hetzner } from './index';

export class APIResource {
  protected client: Hetzner;
  constructor(client: Hetzner) {
    this.client = client;

    this.get = client.get.bind(client);
    this.post = client.post.bind(client);
    this.patch = client.patch.bind(client);
    this.put = client.put.bind(client);
    this.delete = client.delete.bind(client);
    this.getAPIList = client.getAPIList.bind(client);
  }

  protected get: Hetzner['get'];
  protected post: Hetzner['post'];
  protected patch: Hetzner['patch'];
  protected put: Hetzner['put'];
  protected delete: Hetzner['delete'];
  protected getAPIList: Hetzner['getAPIList'];
}
