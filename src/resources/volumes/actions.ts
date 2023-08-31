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
    return this.get(`/volumes/actions/${id}`, options);
  }

  /**
   * Returns all Action objects for a Volume. You can `sort` the results by using the
   * sort URI parameter, and filter them with the `status` parameter.
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
    return this.get(`/volumes/${id}/actions`, { query, ...options });
  }

  /**
   * Attaches a Volume to a Server. Works only if the Server is in the same Location
   * as the Volume.
   */
  attach(
    id: number,
    body: ActionAttachParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionAttachResponse> {
    return this.post(`/volumes/${id}/actions/attach`, { body, ...options });
  }

  /**
   * Changes the protection configuration of a Volume.
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
    return this.post(`/volumes/${id}/actions/change_protection`, { body, ...options });
  }

  /**
   * Detaches a Volume from the Server it’s attached to. You may attach it to a
   * Server again at a later time.
   */
  detach(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionDetachResponse> {
    return this.post(`/volumes/${id}/actions/detach`, options);
  }

  /**
   * Changes the size of a Volume. Note that downsizing a Volume is not possible.
   */
  resize(
    id: number,
    body: ActionResizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionResizeResponse> {
    return this.post(`/volumes/${id}/actions/resize`, { body, ...options });
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
 * Response to GET https://api.hetzner.cloud/v1/volumes/{id}/actions
 */
export interface ActionListResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

/**
 * Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/attach
 */
export interface ActionAttachResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/volumes/{id}/actions/change_protection
 */
export interface ActionChangeProtectionResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/detach
 */
export interface ActionDetachResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/resize
 */
export interface ActionResizeResponse {
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

export interface ActionAttachParams {
  /**
   * ID of the Server the Volume will be attached to
   */
  server: number;

  /**
   * Auto-mount the Volume after attaching it
   */
  automount?: boolean;
}

export interface ActionChangeProtectionParams {
  /**
   * If true, prevents the Volume from being deleted
   */
  delete?: boolean;
}

export interface ActionResizeParams {
  /**
   * New Volume size in GB (must be greater than current size)
   */
  size: number;
}

export namespace Actions {
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionAttachResponse = API.ActionAttachResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionDetachResponse = API.ActionDetachResponse;
  export import ActionResizeResponse = API.ActionResizeResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAttachParams = API.ActionAttachParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
  export import ActionResizeParams = API.ActionResizeParams;
}
