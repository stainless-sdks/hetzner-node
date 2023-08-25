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
  ): Core.APIPromise<Shared.ActionResponse> {
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
  ): Core.APIPromise<Shared.ActionsResponse> {
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
  ): Core.APIPromise<Shared.ActionsResponse> {
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
  ): Core.APIPromise<Shared.ActionsResponse> {
    return this.post(`/firewalls/${id}/actions/set_rules`, { body, ...options });
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

export interface ActionApplyToResourcesParams {
  /**
   * Resources the Firewall should be applied to
   */
  apply_to: Array<ActionApplyToResourcesParams.ApplyTo>;
}

export namespace ActionApplyToResourcesParams {
  export interface ApplyTo {
    /**
     * Configuration for type label_selector, required if type is `label_selector`
     */
    label_selector?: ApplyTo.LabelSelector;

    /**
     * Configuration for type server, required if type is `server`
     */
    server?: ApplyTo.Server;

    /**
     * Type of the resource
     */
    type?: 'server' | 'label_selector';
  }

  export namespace ApplyTo {
    /**
     * Configuration for type label_selector, required if type is `label_selector`
     */
    export interface LabelSelector {
      /**
       * Label selector
       */
      selector: string;
    }

    /**
     * Configuration for type server, required if type is `server`
     */
    export interface Server {
      /**
       * ID of the Server
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
  export interface RemoveFrom {
    /**
     * Configuration for type label_selector, required if type is `label_selector`
     */
    label_selector?: RemoveFrom.LabelSelector;

    /**
     * Configuration for type server, required if type is `server`
     */
    server?: RemoveFrom.Server;

    /**
     * Type of the resource
     */
    type?: 'server' | 'label_selector';
  }

  export namespace RemoveFrom {
    /**
     * Configuration for type label_selector, required if type is `label_selector`
     */
    export interface LabelSelector {
      /**
       * Label selector
       */
      selector: string;
    }

    /**
     * Configuration for type server, required if type is `server`
     */
    export interface Server {
      /**
       * ID of the Server
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
  export import ActionListParams = API.ActionListParams;
  export import ActionApplyToResourcesParams = API.ActionApplyToResourcesParams;
  export import ActionRemoveFromResourcesParams = API.ActionRemoveFromResourcesParams;
  export import ActionSetRulesParams = API.ActionSetRulesParams;
}
