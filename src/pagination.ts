// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';
import * as Shared from './resources/shared';

export interface FloatingIpsPageResponse<Item> {
  floating_ips: Array<Item>;

  meta?: Shared.ResponseMeta;
}

export interface FloatingIpsPageParams {
  page?: number;

  per_page?: number;
}

export class FloatingIpsPage<Item> extends AbstractPage<Item> implements FloatingIpsPageResponse<Item> {
  floating_ips: Array<Item>;

  meta: Shared.ResponseMeta;

  constructor(
    client: APIClient,
    response: Response,
    body: FloatingIpsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.floating_ips = body.floating_ips;
    this.meta = body.meta || {};
  }

  getPaginatedItems(): Item[] {
    return this.floating_ips;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<FloatingIpsPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const nextPage = this.meta.pagination.next_page;
    return { params: { page: nextPage } };
  }
}
