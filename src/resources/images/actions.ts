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
  ): Core.APIPromise<Shared.ActionResponse> {
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
  ): Core.APIPromise<Shared.ActionsResponse>;
  list(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionsResponse>;
  list(
    id: number,
    query: ActionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionsResponse> {
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
    return this.post(`/images/${id}/actions/change_protection`, { body, ...options });
  }
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

export interface ActionChangeProtectionParams {
  /**
   * If true, prevents the snapshot from being deleted
   */
  delete?: boolean;
}

export namespace Actions {
  export import ActionListParams = API.ActionListParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
}
