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
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<FirewallRetrieveResponse> {
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
  ): Core.APIPromise<FirewallUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<FirewallUpdateResponse>;
  update(
    id: number,
    body: FirewallUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallUpdateResponse> {
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

/**
 * Firewalls can limit the network access to or from your resources.
 */
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
  /**
   * Resource a Firewall should be applied to.
   */
  export interface AppliedTo {
    /**
     * Type of resource referenced
     */
    type: 'label_selector' | 'server';

    applied_to_resources?: Array<AppliedTo.AppliedToResource>;

    /**
     * Configuration for type LabelSelector, required if type is `label_selector`
     */
    label_selector?: AppliedTo.LabelSelector;

    /**
     * ID of the Resource
     */
    server?: AppliedTo.Server;
  }

  export namespace AppliedTo {
    export interface AppliedToResource {
      /**
       * ID of the Resource
       */
      server?: AppliedToResource.Server;

      /**
       * Type of resource referenced
       */
      type?: 'server';
    }

    export namespace AppliedToResource {
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

/**
 * Rule of a firewall.
 */
export interface Rule {
  /**
   * Select traffic direction on which rule should be applied. Use `source_ips` for
   * direction `in` and `destination_ips` for direction `out`.
   */
  direction: 'in' | 'out';

  /**
   * Type of traffic to allow
   */
  protocol: 'esp' | 'gre' | 'icmp' | 'tcp' | 'udp';

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

/**
 * Response to POST https://api.hetzner.cloud/v1/firewalls
 */
export interface FirewallCreateResponse {
  actions?: Array<Shared.Action>;

  /**
   * Firewalls can limit the network access to or from your resources.
   */
  firewall?: Firewall;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/firewalls/{id}
 */
export interface FirewallRetrieveResponse {
  /**
   * Firewalls can limit the network access to or from your resources.
   */
  firewall: Firewall;
}

/**
 * Response to PUT https://api.hetzner.cloud/v1/firewalls/{id}
 */
export interface FirewallUpdateResponse {
  /**
   * Firewalls can limit the network access to or from your resources.
   */
  firewall: Firewall;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/firewalls
 */
export interface FirewallListResponse {
  firewalls: Array<Firewall>;

  /**
   * Metadata contained in the response
   */
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
  labels?: Record<string, string>;

  /**
   * Array of rules
   */
  rules?: Array<Rule>;
}

export namespace FirewallCreateParams {
  /**
   * Resource a Firewall should be applied to.
   */
  export interface ApplyTo {
    /**
     * Type of the resource
     */
    type: 'label_selector' | 'server';

    /**
     * Configuration for type LabelSelector, required if type is `label_selector`
     */
    label_selector?: ApplyTo.LabelSelector;

    /**
     * ID of the Resource
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

export interface FirewallUpdateParams {
  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

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
}

export namespace Firewalls {
  export import Firewall = API.Firewall;
  export import Rule = API.Rule;
  export import FirewallCreateResponse = API.FirewallCreateResponse;
  export import FirewallRetrieveResponse = API.FirewallRetrieveResponse;
  export import FirewallUpdateResponse = API.FirewallUpdateResponse;
  export import FirewallListResponse = API.FirewallListResponse;
  export import FirewallCreateParams = API.FirewallCreateParams;
  export import FirewallUpdateParams = API.FirewallUpdateParams;
  export import FirewallListParams = API.FirewallListParams;

  export import Actions = API.Actions;
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
