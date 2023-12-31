// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';
import * as Shared from './resources/shared';

/**
 * Response to GET https://api.hetzner.cloud/v1/floating_ips
 */
export interface FloatingIPsPageResponse<Item> {
  floating_ips: Array<Item>;

  /**
   * Metadata contained in the response
   */
  meta: Shared.ResponseMeta;
}

export interface FloatingIPsPageParams {
  /**
   * Specifies the page to fetch. The number of the first page is 1
   */
  page?: number;

  /**
   * Specifies the number of items returned per page. The default value is 25, the
   * maximum value is 50 except otherwise specified in the documentation.
   */
  per_page?: number;
}

export class FloatingIPsPage<Item> extends AbstractPage<Item> implements FloatingIPsPageResponse<Item> {
  floating_ips: Array<Item>;

  /**
   * Metadata contained in the response
   */
  meta: Shared.ResponseMeta;

  constructor(
    client: APIClient,
    response: Response,
    body: FloatingIPsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.floating_ips = body.floating_ips;
    this.meta = body.meta;
  }

  getPaginatedItems(): Item[] {
    return this.floating_ips;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<FloatingIPsPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const currentPage = this.meta.pagination.page;
    if (currentPage === this.meta.pagination.last_page) {
      return null;
    }
    const nextPage = this.meta.pagination.next_page;
    return { params: { page: nextPage } };
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/servers
 */
export interface ServersPageResponse<Item> {
  /**
   * Metadata contained in the response
   */
  meta: Shared.ResponseMeta;

  servers: Array<Item>;
}

export interface ServersPageParams {
  /**
   * Specifies the page to fetch. The number of the first page is 1
   */
  page?: number;

  /**
   * Specifies the number of items returned per page. The default value is 25, the
   * maximum value is 50 except otherwise specified in the documentation.
   */
  per_page?: number;
}

export class ServersPage<Item> extends AbstractPage<Item> implements ServersPageResponse<Item> {
  /**
   * Metadata contained in the response
   */
  meta: Shared.ResponseMeta;

  servers: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: ServersPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.meta = body.meta;
    this.servers = body.servers;
  }

  getPaginatedItems(): Item[] {
    return this.servers;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ServersPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const currentPage = this.meta.pagination.page;
    if (currentPage === this.meta.pagination.last_page) {
      return null;
    }
    const nextPage = this.meta.pagination.next_page;
    return { params: { page: nextPage } };
  }
}
