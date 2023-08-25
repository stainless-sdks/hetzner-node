// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import * as API from './index';

export class Firewalls extends APIResource {
  actions: Actions = new Actions(this.client);

  /**
   * Creates a new Firewall.
   *
   * #### Call specific error codes
   *
   * | Code                          | Description                                                   |
   * | ----------------------------- | ------------------------------------------------------------- |
   * | `server_already_added`        | Server added more than one time to resource                   |
   * | `incompatible_network_type`   | The Network type is incompatible for the given resource       |
   * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
   */
  create(body: FirewallCreateParams, options?: Core.RequestOptions): Core.APIPromise<FirewallCreateResponse> {
    return this.post('/firewalls', { body, ...options });
  }

  /**
   * Gets a specific Firewall object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<FirewallResponse> {
    return this.get(`/firewalls/${id}`, options);
  }

  /**
   * Updates the Firewall.
   *
   * Note that when updating labels, the Firewall's current set of labels will be
   * replaced with the labels provided in the request body. So, for example, if you
   * want to add a new label, you have to provide all existing labels plus the new
   * label in the request body.
   *
   * Note: if the Firewall object changes during the request, the response will be a
   * “conflict” error.
   */
  update(
    id: number,
    body?: FirewallUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<FirewallResponse>;
  update(
    id: number,
    body: FirewallUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/firewalls/${id}`, { body, ...options });
  }

  /**
   * Returns all Firewall objects.
   */
  list(query?: FirewallListParams, options?: Core.RequestOptions): Core.APIPromise<FirewallListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FirewallListResponse>;
  list(
    query: FirewallListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/firewalls', { query, ...options });
  }

  /**
   * Deletes a Firewall.
   *
   * #### Call specific error codes
   *
   * | Code              | Description                               |
   * | ----------------- | ----------------------------------------- |
   * | `resource_in_use` | Firewall must not be in use to be deleted |
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/firewalls/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

export interface Firewall {
  /**
   * ID of the Resource
   */
  id: number;

  applied_to: Array<Firewall.AppliedTo>;

  /**
   * Point in time when the Resource was created (in ISO-8601 format)
   */
  created: string;

  /**
   * Name of the Resource. Must be unique per Project.
   */
  name: string;

  rules: Array<Rule>;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;
}

export namespace Firewall {
  export interface AppliedTo {
    /**
     * Type of resource referenced
     */
    type: 'server' | 'label_selector';

    applied_to_resources?: Array<AppliedTo.AppliedToResource>;

    label_selector?: AppliedTo.LabelSelector;

    server?: AppliedTo.Server;
  }

  export namespace AppliedTo {
    export interface AppliedToResource {
      server?: AppliedToResource.Server;

      /**
       * Type of resource referenced
       */
      type?: 'server';
    }

    export namespace AppliedToResource {
      export interface Server {
        /**
         * ID of the Resource
         */
        id: number;
      }
    }

    export interface LabelSelector {
      /**
       * Label selector
       */
      selector: string;
    }

    export interface Server {
      /**
       * ID of the Resource
       */
      id: number;
    }
  }
}

export interface FirewallResponse {
  firewall: Firewall;
}

export interface Rule {
  /**
   * Select traffic direction on which rule should be applied. Use `source_ips` for
   * direction `in` and `destination_ips` for direction `out`.
   */
  direction: 'in' | 'out';

  /**
   * Type of traffic to allow
   */
  protocol: 'tcp' | 'udp' | 'icmp' | 'esp' | 'gre';

  /**
   * Description of the Rule
   */
  description?: string | null;

  /**
   * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow
   * all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100
   * CIDRs at most.
   */
  destination_ips?: Array<string>;

  /**
   * Port or port range to which traffic will be allowed, only applicable for
   * protocols TCP and UDP. A port range can be specified by separating two ports
   * with a dash, e.g `1024-5000`.
   */
  port?: string;

  /**
   * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow
   * all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100
   * CIDRs at most.
   */
  source_ips?: Array<string>;
}

export interface FirewallCreateResponse {
  actions?: Array<Shared.Action>;

  firewall?: Firewall;
}

export interface FirewallListResponse {
  firewalls: Array<Firewall>;

  meta?: Shared.ResponseMeta;
}

export interface FirewallCreateParams {
  /**
   * Name of the Firewall
   */
  name: string;

  /**
   * Resources the Firewall should be applied to after creation
   */
  apply_to?: Array<FirewallCreateParams.ApplyTo>;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: unknown;

  /**
   * Array of rules
   */
  rules?: Array<Rule>;
}

export namespace FirewallCreateParams {
  export interface ApplyTo {
    /**
     * Type of the resource
     */
    type: 'server' | 'label_selector';

    /**
     * Configuration for type LabelSelector, required if type is `label_selector`
     */
    label_selector?: ApplyTo.LabelSelector;

    /**
     * Configuration for type Server, required if type is `server`
     */
    server?: ApplyTo.Server;
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
     * Configuration for type Server, required if type is `server`
     */
    export interface Server {
      /**
       * ID of the Server
       */
      id: number;
    }
  }
}

export interface FirewallUpdateParams {
  /**
   * User-defined labels (key-value pairs)
   */
  labels?: unknown;

  /**
   * New Firewall name
   */
  name?: string;
}

export interface FirewallListParams {
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

  page?: number;

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
}

export namespace Firewalls {
  export import Firewall = API.Firewall;
  export import FirewallResponse = API.FirewallResponse;
  export import Rule = API.Rule;
  export import FirewallCreateResponse = API.FirewallCreateResponse;
  export import FirewallListResponse = API.FirewallListResponse;
  export import FirewallCreateParams = API.FirewallCreateParams;
  export import FirewallUpdateParams = API.FirewallUpdateParams;
  export import FirewallListParams = API.FirewallListParams;

  export import Actions = API.Actions;
  export import ActionListParams = API.ActionListParams;
  export import ActionApplyToResourcesParams = API.ActionApplyToResourcesParams;
  export import ActionRemoveFromResourcesParams = API.ActionRemoveFromResourcesParams;
  export import ActionSetRulesParams = API.ActionSetRulesParams;
}
