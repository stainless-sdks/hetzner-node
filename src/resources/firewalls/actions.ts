// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Firewalls from 'hetzner/resources/firewalls/index';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Actions extends APIResource {
  /**
   * Returns a specific Action for a Firewall.
   */
  retrieve(
    id: number,
    actionId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRetrieveResponse> {
    return this.get(`/firewalls/${id}/actions/${actionId}`, options);
  }

  /**
   * Returns all Action objects for a Firewall. You can sort the results by using the
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
    return this.get(`/firewalls/${id}/actions`, { query, ...options });
  }

  /**
   * Applies one Firewall to multiple resources.
   *
   * Currently servers (public network interface) and label selectors are supported.
   *
   * #### Call specific error codes
   *
   * | Code                          | Description                                                   |
   * | ----------------------------- | ------------------------------------------------------------- |
   * | `firewall_already_applied`    | Firewall was already applied on resource                      |
   * | `incompatible_network_type`   | The Network type is incompatible for the given resource       |
   * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
   */
  applyToResources(
    id: number,
    body: ActionApplyToResourcesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionApplyToResourcesResponse> {
    return this.post(`/firewalls/${id}/actions/apply_to_resources`, { body, ...options });
  }

  /**
   * Removes one Firewall from multiple resources.
   *
   * Currently only Servers (and their public network interfaces) are supported.
   *
   * #### Call specific error codes
   *
   * | Code                                 | Description                                                            |
   * | ------------------------------------ | ---------------------------------------------------------------------- |
   * | `firewall_already_removed`           | Firewall was already removed from the resource                         |
   * | `firewall_resource_not_found`        | The resource the Firewall should be attached to was not found          |
   * | `firewall_managed_by_label_selector` | Firewall was applied via label selector and cannot be removed manually |
   */
  removeFromResources(
    id: number,
    body: ActionRemoveFromResourcesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRemoveFromResourcesResponse> {
    return this.post(`/firewalls/${id}/actions/remove_from_resources`, { body, ...options });
  }

  /**
   * Sets the rules of a Firewall.
   *
   * All existing rules will be overwritten. Pass an empty `rules` array to remove
   * all rules. The maximum amount of rules that can be defined is 50.
   *
   * #### Call specific error codes
   *
   * | Code                          | Description                                                   |
   * | ----------------------------- | ------------------------------------------------------------- |
   * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
   */
  setRules(
    id: number,
    body: ActionSetRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionSetRulesResponse> {
    return this.post(`/firewalls/${id}/actions/set_rules`, { body, ...options });
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/firewalls/{id}/actions/{action_id}
 */
export interface ActionRetrieveResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/firewalls/{id}/actions
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
 * https://api.hetzner.cloud/v1/firewalls/{id}/actions/apply_to_resources
 */
export interface ActionApplyToResourcesResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/firewalls/{id}/actions/remove_from_resources
 */
export interface ActionRemoveFromResourcesResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

/**
 * Response to POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/set_rules
 */
export interface ActionSetRulesResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
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

export interface ActionApplyToResourcesParams {
  /**
   * Resources the Firewall should be applied to
   */
  apply_to: Array<ActionApplyToResourcesParams.ApplyTo>;
}

export namespace ActionApplyToResourcesParams {
  /**
   * Resource a Firewall should be applied to.
   */
  export interface ApplyTo {
    /**
     * Configuration for type LabelSelector, required if type is `label_selector`
     */
    label_selector?: ApplyTo.LabelSelector;

    /**
     * ID of the Resource
     */
    server?: ApplyTo.Server;

    /**
     * Type of the resource
     */
    type?: 'label_selector' | 'server';
  }

  export namespace ApplyTo {
    /**
     * Configuration for type LabelSelector, required if type is `label_selector`
     */
    export interface LabelSelector {
      /**
       * Label selector
       */
      selector: string;
    }

    /**
     * ID of the Resource
     */
    export interface Server {
      /**
       * ID of the Resource | ID of the Server
       */
      id: number;
    }
  }
}

export interface ActionRemoveFromResourcesParams {
  /**
   * Resources the Firewall should be removed from
   */
  remove_from: Array<ActionRemoveFromResourcesParams.RemoveFrom>;
}

export namespace ActionRemoveFromResourcesParams {
  /**
   * Resource a Firewall should be applied to.
   */
  export interface RemoveFrom {
    /**
     * Configuration for type LabelSelector, required if type is `label_selector`
     */
    label_selector?: RemoveFrom.LabelSelector;

    /**
     * ID of the Resource
     */
    server?: RemoveFrom.Server;

    /**
     * Type of the resource
     */
    type?: 'label_selector' | 'server';
  }

  export namespace RemoveFrom {
    /**
     * Configuration for type LabelSelector, required if type is `label_selector`
     */
    export interface LabelSelector {
      /**
       * Label selector
       */
      selector: string;
    }

    /**
     * ID of the Resource
     */
    export interface Server {
      /**
       * ID of the Resource | ID of the Server
       */
      id: number;
    }
  }
}

export interface ActionSetRulesParams {
  /**
   * Array of rules
   */
  rules: Array<Firewalls.Rule>;
}

export namespace Actions {
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionApplyToResourcesResponse = API.ActionApplyToResourcesResponse;
  export import ActionRemoveFromResourcesResponse = API.ActionRemoveFromResourcesResponse;
  export import ActionSetRulesResponse = API.ActionSetRulesResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionApplyToResourcesParams = API.ActionApplyToResourcesParams;
  export import ActionRemoveFromResourcesParams = API.ActionRemoveFromResourcesParams;
  export import ActionSetRulesParams = API.ActionSetRulesParams;
}
