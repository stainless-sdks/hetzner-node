// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Actions extends APIResource {
  /**
   * Returns a specific Action for an Image.
   */
  retrieve(
    id: number,
    actionId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRetrieveResponse> {
    return this.get(`/images/${id}/actions/${actionId}`, options);
  }

  /**
   * Returns all Action objects for an Image. You can sort the results by using the
   * `sort` URI parameter, and filter them with the `status` parameter.
   */
  list(
    id: number,
    query?: ActionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionListResponse>;
  list(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionListResponse>;
  list(
    id: number,
    query: ActionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this.get(`/images/${id}/actions`, { query, ...options });
  }

  /**
   * Changes the protection configuration of the Image. Can only be used on
   * snapshots.
   */
  changeProtection(
    id: number,
    body?: ActionChangeProtectionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeProtectionResponse>;
  changeProtection(
    id: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeProtectionResponse>;
  changeProtection(
    id: number,
    body: ActionChangeProtectionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeProtectionResponse> {
    if (isRequestOptions(body)) {
      return this.changeProtection(id, {}, body);
    }
    return this.post(`/images/${id}/actions/change_protection`, { body, ...options });
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/images/{id}/actions/{action_id}
 */
export interface ActionRetrieveResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/images/{id}/actions
 */
export interface ActionListResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/images/{id}/actions/change_protection
 */
export interface ActionChangeProtectionResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

export interface ActionListParams {
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

export interface ActionChangeProtectionParams {
  /**
   * If true, prevents the snapshot from being deleted
   */
  delete?: boolean;
}

export namespace Actions {
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
}
