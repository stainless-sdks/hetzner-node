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
  ): Core.APIPromise<Shared.ActionResponse> {
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
  ): Core.APIPromise<Shared.ActionResponse> {
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
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/floating_ips/${id}/actions/change_dns_ptr`, { body, ...options });
  }

  /**
   * Changes the protection configuration of the Floating IP.
   */
  changeProtection(
    id: number,
    body?: ActionChangeProtectionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse>;
  changeProtection(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse>;
  changeProtection(
    id: number,
    body: ActionChangeProtectionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    if (isRequestOptions(body)) {
      return this.changeProtection(id, {}, body);
    }
    return this.post(`/floating_ips/${id}/actions/change_protection`, { body, ...options });
  }

  /**
   * Unassigns a Floating IP, resulting in it being unreachable. You may assign it to
   * a Server again at a later time.
   */
  unassign(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/floating_ips/${id}/actions/unassign`, options);
  }
}

export interface ActionListResponse {
  actions: Array<Shared.Action>;

  meta?: Shared.ResponseMeta;
}

export interface ActionListParams {
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
  export import ActionListResponse = API.ActionListResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAssignParams = API.ActionAssignParams;
  export import ActionChangeDnsPtrParams = API.ActionChangeDnsPtrParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
}
