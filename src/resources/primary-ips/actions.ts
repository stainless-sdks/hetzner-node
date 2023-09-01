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
    return this.get(`/primary_ips/actions/${id}`, options);
  }

  /**
   * Returns all Action objects. You can `sort` the results by using the sort URI
   * parameter, and filter them with the `status` and `id` parameter.
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
    return this.get('/primary_ips/actions', { query, ...options });
  }

  /**
   * Assigns a Primary IP to a Server.
   *
   * A Server can only have one Primary IP of type `ipv4` and one of type `ipv6`
   * assigned. If you need more IPs use Floating IPs.
   *
   * The Server must be powered off (status `off`) in order for this operation to
   * succeed.
   *
   * #### Call specific error codes
   *
   * | Code                          | Description                                          |
   * | ----------------------------- | ---------------------------------------------------- |
   * | `server_not_stopped`          | The server is running, but needs to be powered off   |
   * | `primary_ip_already_assigned` | Primary ip is already assigned to a different server |
   * | `server_has_ipv4`             | The server already has an ipv4 address               |
   * | `server_has_ipv6`             | The server already has an ipv6 address               |
   */
  assign(
    id: number,
    body: ActionAssignParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionAssignResponse> {
    return this.post(`/primary_ips/${id}/actions/assign`, { body, ...options });
  }

  /**
   * Changes the hostname that will appear when getting the hostname belonging to
   * this Primary IP.
   */
  changeDNSPtr(
    id: number,
    body: ActionChangeDNSPtrParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeDNSPtrResponse> {
    return this.post(`/primary_ips/${id}/actions/change_dns_ptr`, { body, ...options });
  }

  /**
   * Changes the protection configuration of a Primary IP.
   *
   * A Primary IP can only be delete protected if its `auto_delete` property is set
   * to `false`.
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
    return this.post(`/primary_ips/${id}/actions/change_protection`, { body, ...options });
  }

  /**
   * Unassigns a Primary IP from a Server.
   *
   * The Server must be powered off (status `off`) in order for this operation to
   * succeed.
   *
   * Note that only Servers that have at least one network interface (public or
   * private) attached can be powered on.
   *
   * #### Call specific error codes
   *
   * | Code                             | Description                                        |
   * | -------------------------------- | -------------------------------------------------- |
   * | `server_not_stopped`             | The server is running, but needs to be powered off |
   * | `server_is_load_balancer_target` | The server ipv4 address is a loadbalancer target   |
   */
  unassign(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionUnassignResponse> {
    return this.post(`/primary_ips/${id}/actions/unassign`, options);
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

/**
 * Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/assign
 */
export interface ActionAssignResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_dns_ptr
 */
export interface ActionChangeDNSPtrResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_protection
 */
export interface ActionChangeProtectionResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/unassign
 */
export interface ActionUnassignResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
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

export interface ActionAssignParams {
  /**
   * ID of a resource of type `assignee_type`
   */
  assignee_id: number;

  /**
   * Type of resource assigning the Primary IP to
   */
  assignee_type: 'server';
}

export interface ActionChangeDNSPtrParams {
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
   * If true, prevents the Primary IP from being deleted
   */
  delete?: boolean;
}

export namespace Actions {
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionAssignResponse = API.ActionAssignResponse;
  export import ActionChangeDNSPtrResponse = API.ActionChangeDNSPtrResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionUnassignResponse = API.ActionUnassignResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAssignParams = API.ActionAssignParams;
  export import ActionChangeDNSPtrParams = API.ActionChangeDNSPtrParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
}
