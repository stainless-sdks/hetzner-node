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
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionRetrieveResponse> {
    return this.get(`/actions/${id}`, options);
  }

  /**
   * Returns all Action objects. You can `sort` the results by using the sort URI
   * parameter, and filter them with the `status` parameter.
   */
  list(query?: ActionListParams, options?: Core.RequestOptions): Core.APIPromise<ActionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ActionListResponse>;
  list(
    query: ActionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/actions', { query, ...options });
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/{resource}/actions
 */
export interface ActionRetrieveResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/{resource}/actions/{id}
 */
export interface ActionListResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

export interface ActionListParams {
  /**
   * Can be used multiple times, the response will contain only Actions with
   * specified IDs
   */
  id?: number;

  /**
   * Specifies the page to fetch. The number of the first page is 1
   */
  page?: number;

  /**
   * Specifies the number of items returned per page. The default value is 25, the
   * maximum value is 50 except otherwise specified in the documentation.
   */
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
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionListParams = API.ActionListParams;
}
