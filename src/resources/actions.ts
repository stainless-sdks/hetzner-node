// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Actions extends APIResource {
  /**
   * Returns a specific Action object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.get(`/actions/${id}`, options);
  }

  /**
   * Returns all Action objects. You can `sort` the results by using the sort URI
   * parameter, and filter them with the `status` parameter.
   */
  list(query?: ActionListParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionsResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.ActionsResponse>;
  list(
    query: ActionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionsResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/actions', { query, ...options });
  }
}

export interface ActionListParams {
  /**
   * Can be used multiple times, the response will contain only Actions with
   * specified IDs
   */
  id?: number;

  page?: number;

  per_page?: number;

  /**
   * Can be used multiple times.
   */
  sort?: Shared.SortParam;

  /**
   * Can be used multiple times, the response will contain only Actions with
   * specified statuses
   */
  status?: Shared.StatusParam;
}

export namespace Actions {
  export import ActionListParams = API.ActionListParams;
}
