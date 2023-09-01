// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class PlacementGroups extends APIResource {
  /**
   * Creates a new PlacementGroup.
   */
  create(
    body: PlacementGroupCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlacementGroupCreateResponse> {
    return this.post('/placement_groups', { body, ...options });
  }

  /**
   * Gets a specific PlacementGroup object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<PlacementGroupRetrieveResponse> {
    return this.get(`/placement_groups/${id}`, options);
  }

  /**
   * Updates the PlacementGroup properties.
   *
   * Note that when updating labels, the PlacementGroup’s current set of labels will
   * be replaced with the labels provided in the request body. So, for example, if
   * you want to add a new label, you have to provide all existing labels plus the
   * new label in the request body.
   *
   * Note: if the PlacementGroup object changes during the request, the response will
   * be a “conflict” error.
   */
  update(
    id: number,
    body?: PlacementGroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlacementGroupUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<PlacementGroupUpdateResponse>;
  update(
    id: number,
    body: PlacementGroupUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlacementGroupUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/placement_groups/${id}`, { body, ...options });
  }

  /**
   * Returns all PlacementGroup objects.
   */
  list(
    query?: PlacementGroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlacementGroupListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PlacementGroupListResponse>;
  list(
    query: PlacementGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlacementGroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/placement_groups', { query, ...options });
  }

  /**
   * Deletes a PlacementGroup.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/placement_groups/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export interface PlacementGroup {
  /**
   * ID of the Resource
   */
  id: number;

  /**
   * Point in time when the Resource was created (in ISO-8601 format)
   */
  created: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels: Record<string, string>;

  /**
   * Name of the Resource. Must be unique per Project.
   */
  name: string;

  /**
   * Array of IDs of Servers that are part of this Placement Group
   */
  servers: Array<number>;

  /**
   * Type of the Placement Group
   */
  type: 'spread';
}

/**
 * Response to POST https://api.hetzner.cloud/v1/placement_groups
 */
export interface PlacementGroupCreateResponse {
  placement_group: PlacementGroup;

  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action?: PlacementGroupCreateResponse.Action | null;
}

export namespace PlacementGroupCreateResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  export interface Action {
    /**
     * ID of the Action
     */
    id: number;

    /**
     * Command executed in the Action
     */
    command: string;

    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: Action.Error | null;

    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the
     * Action is finished otherwise null.
     */
    finished: string | null;

    /**
     * Progress of Action in percent
     */
    progress: number;

    /**
     * Resources the Action relates to
     */
    resources: Array<Action.Resource>;

    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;

    /**
     * Status of the Action
     */
    status: 'error' | 'running' | 'success';
  }

  export namespace Action {
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    export interface Error {
      /**
       * Fixed machine readable code
       */
      code: string;

      /**
       * Humanized error message
       */
      message: string;
    }

    export interface Resource {
      /**
       * ID of the Resource | ID of resource referenced
       */
      id: number;

      /**
       * Type of resource referenced
       */
      type: string;
    }
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/placement_groups/{id}
 */
export interface PlacementGroupRetrieveResponse {
  placement_group: PlacementGroup;
}

/**
 * Response to PUT https://api.hetzner.cloud/v1/placement_groups/{id}
 */
export interface PlacementGroupUpdateResponse {
  placement_group: PlacementGroup;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/placement_groups
 */
export interface PlacementGroupListResponse {
  placement_groups: Array<PlacementGroup>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

export interface PlacementGroupCreateParams {
  /**
   * Name of the PlacementGroup
   */
  name: string;

  /**
   * Define the Placement Group Type.
   */
  type: 'spread';

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;
}

export interface PlacementGroupUpdateParams {
  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * New PlacementGroup name
   */
  name?: string;
}

export interface PlacementGroupListParams {
  /**
   * Can be used to filter resources by labels. The response will only contain
   * resources matching the label selector.
   */
  label_selector?: string;

  /**
   * Can be used to filter resources by their name. The response will only contain
   * the resources matching the specified name
   */
  name?: string;

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
  sort?:
    | 'id'
    | 'id:asc'
    | 'id:desc'
    | 'name'
    | 'name:asc'
    | 'name:desc'
    | 'created'
    | 'created:asc'
    | 'created:desc';

  /**
   * Can be used multiple times. The response will only contain PlacementGroups
   * matching the type.
   */
  type?: 'spread';
}

export namespace PlacementGroups {
  export import PlacementGroup = API.PlacementGroup;
  export import PlacementGroupCreateResponse = API.PlacementGroupCreateResponse;
  export import PlacementGroupRetrieveResponse = API.PlacementGroupRetrieveResponse;
  export import PlacementGroupUpdateResponse = API.PlacementGroupUpdateResponse;
  export import PlacementGroupListResponse = API.PlacementGroupListResponse;
  export import PlacementGroupCreateParams = API.PlacementGroupCreateParams;
  export import PlacementGroupUpdateParams = API.PlacementGroupUpdateParams;
  export import PlacementGroupListParams = API.PlacementGroupListParams;
}
