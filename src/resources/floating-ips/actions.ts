// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Actions extends APIResource {
  /**
   * Returns a specific Action object for a Floating IP.
   */
  retrieve(
    id: number,
    actionId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRetrieveResponse> {
    return this.get(`/floating_ips/${id}/actions/${actionId}`, options);
  }

  /**
   * Returns all Action objects for a Floating IP. You can sort the results by using
   * the `sort` URI parameter, and filter them with the `status` parameter.
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
    return this.get(`/floating_ips/${id}/actions`, { query, ...options });
  }

  /**
   * Assigns a Floating IP to a Server.
   */
  assign(
    id: number,
    body: ActionAssignParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionAssignResponse> {
    return this.post(`/floating_ips/${id}/actions/assign`, { body, ...options });
  }

  /**
   * Changes the hostname that will appear when getting the hostname belonging to
   * this Floating IP.
   */
  changeDnsPtr(
    id: number,
    body: ActionChangeDnsPtrParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeDnsPtrResponse> {
    return this.post(`/floating_ips/${id}/actions/change_dns_ptr`, { body, ...options });
  }

  /**
   * Changes the protection configuration of the Floating IP.
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
    return this.post(`/floating_ips/${id}/actions/change_protection`, { body, ...options });
  }

  /**
   * Unassigns a Floating IP, resulting in it being unreachable. You may assign it to
   * a Server again at a later time.
   */
  unassign(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionUnassignResponse> {
    return this.post(`/floating_ips/${id}/actions/unassign`, options);
  }
}

/**
 * Response to GET
 * https://api.hetzner.cloud/v1/floating_ips/{id}/actions/{action_id}
 */
export interface ActionRetrieveResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/floating_ips/{id}/actions
 */
export interface ActionListResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

/**
 * Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/assign
 */
export interface ActionAssignResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/floating_ips/{id}/actions/change_dns_ptr
 */
export interface ActionChangeDnsPtrResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/floating_ips/{id}/actions/change_protection
 */
export interface ActionChangeProtectionResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/unassign
 */
export interface ActionUnassignResponse {
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

export interface ActionAssignParams {
  /**
   * ID of the Server the Floating IP shall be assigned to
   */
  server: number;
}

export interface ActionChangeDnsPtrParams {
  /**
   * Hostname to set as a reverse DNS PTR entry, will reset to original default value
   * if `null`
   */
  dns_ptr: string | null;

  /**
   * IP address for which to set the reverse DNS entry
   */
  ip: string;
}

export interface ActionChangeProtectionParams {
  /**
   * If true, prevents the Floating IP from being deleted
   */
  delete?: boolean;
}

export namespace Actions {
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionAssignResponse = API.ActionAssignResponse;
  export import ActionChangeDnsPtrResponse = API.ActionChangeDnsPtrResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionUnassignResponse = API.ActionUnassignResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAssignParams = API.ActionAssignParams;
  export import ActionChangeDnsPtrParams = API.ActionChangeDnsPtrParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
}
