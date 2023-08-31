// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import * as API from './index';

export class Networks extends APIResource {
  actions: Actions = new Actions(this.client);

  /**
   * Creates a network with the specified `ip_range`.
   *
   * You may specify one or more `subnets`. You can also add more Subnets later by
   * using the
   * [add subnet action](https://docs.hetzner.cloud/#network-actions-add-a-subnet-to-a-network).
   * If you do not specify an `ip_range` in the subnet we will automatically pick the
   * first available /24 range for you.
   *
   * You may specify one or more routes in `routes`. You can also add more routes
   * later by using the
   * [add route action](https://docs.hetzner.cloud/#network-actions-add-a-route-to-a-network).
   */
  create(body: NetworkCreateParams, options?: Core.RequestOptions): Core.APIPromise<NetworkCreateResponse> {
    return this.post('/networks', { body, ...options });
  }

  /**
   * Gets a specific network object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<NetworkRetrieveResponse> {
    return this.get(`/networks/${id}`, options);
  }

  /**
   * Updates the network properties.
   *
   * Note that when updating labels, the network’s current set of labels will be
   * replaced with the labels provided in the request body. So, for example, if you
   * want to add a new label, you have to provide all existing labels plus the new
   * label in the request body.
   *
   * Note: if the network object changes during the request, the response will be a
   * “conflict” error.
   */
  update(
    id: number,
    body?: NetworkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<NetworkUpdateResponse>;
  update(
    id: number,
    body: NetworkUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/networks/${id}`, { body, ...options });
  }

  /**
   * Gets all existing networks that you have available.
   */
  list(query?: NetworkListParams, options?: Core.RequestOptions): Core.APIPromise<NetworkListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<NetworkListResponse>;
  list(
    query: NetworkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/networks', { query, ...options });
  }

  /**
   * Deletes a network. If there are Servers attached they will be detached in the
   * background.
   *
   * Note: if the network object changes during the request, the response will be a
   * “conflict” error.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/networks/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

/**
 * Response to POST https://api.hetzner.cloud/v1/networks
 */
export interface NetworkCreateResponse {
  network?: NetworkCreateResponse.Network;
}

export namespace NetworkCreateResponse {
  export interface Network {
    /**
     * ID of the Network
     */
    id: number;

    /**
     * Point in time when the Network was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Indicates if the routes from this network should be exposed to the vSwitch
     * connection. The exposing only takes effect if a vSwitch connection is active.
     *
     * Currently the default route 0.0.0.0/0 is not exposed to the vSwitch connection.
     * We are aware of the issue and are working on a solution.
     */
    expose_routes_to_vswitch: boolean;

    /**
     * IPv4 prefix of the whole Network
     */
    ip_range: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Network
     */
    name: string;

    /**
     * Protection configuration for the Resource
     */
    protection: Network.Protection;

    /**
     * Array of routes set in this Network
     */
    routes: Array<Network.Route>;

    /**
     * Array of IDs of Servers attached to this Network
     */
    servers: Array<number>;

    /**
     * Array subnets allocated in this Network
     */
    subnets: Array<Network.Subnet>;

    /**
     * Array of IDs of Load Balancers attached to this Network
     */
    load_balancers?: Array<number>;
  }

  export namespace Network {
    /**
     * Protection configuration for the Resource
     */
    export interface Protection {
      /**
       * If true, prevents the Resource from being deleted | If true, prevents the
       * Network from being deleted
       */
      delete: boolean;
    }

    /**
     * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route |
     * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route
     */
    export interface Route {
      /**
       * Destination network or host of this route. Must not overlap with an existing
       * ip_range in any subnets or with any destinations in other routes or with the
       * first IP of the networks ip_range or with 172.31.1.1. Must be one of the private
       * IPv4 ranges of RFC1918.
       */
      destination: string;

      /**
       * Gateway for the route. Cannot be the first IP of the networks ip_range and also
       * cannot be 172.31.1.1 as this IP is being used as a gateway for the public
       * network interface of Servers. | Gateway for the route. Cannot be the first IP of
       * the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being
       * used as a gateway for the public network interface of Servers.
       */
      gateway: string;
    }

    export interface Subnet {
      /**
       * Gateway for Servers attached to this subnet. For subnets of type Server this is
       * always the first IP of the network IP range.
       */
      gateway: string;

      /**
       * Name of Network zone. The Location object contains the `network_zone` property
       * each Location belongs to.
       */
      network_zone: string;

      /**
       * Type of Subnetwork
       */
      type: 'cloud' | 'server' | 'vswitch';

      /**
       * Range to allocate IPs from. Must be a Subnet of the ip_range of the parent
       * network object and must not overlap with any other subnets or with any
       * destinations in routes. Minimum Network size is /30. We suggest that you pick a
       * bigger Network with a /24 netmask.
       */
      ip_range?: string;

      /**
       * ID of the robot vSwitch if the subnet is of type vswitch.
       */
      vswitch_id?: number | null;
    }
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/networks/{id}
 */
export interface NetworkRetrieveResponse {
  network?: NetworkRetrieveResponse.Network;
}

export namespace NetworkRetrieveResponse {
  export interface Network {
    /**
     * ID of the Network
     */
    id: number;

    /**
     * Point in time when the Network was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Indicates if the routes from this network should be exposed to the vSwitch
     * connection. The exposing only takes effect if a vSwitch connection is active.
     *
     * Currently the default route 0.0.0.0/0 is not exposed to the vSwitch connection.
     * We are aware of the issue and are working on a solution.
     */
    expose_routes_to_vswitch: boolean;

    /**
     * IPv4 prefix of the whole Network
     */
    ip_range: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Network
     */
    name: string;

    /**
     * Protection configuration for the Resource
     */
    protection: Network.Protection;

    /**
     * Array of routes set in this Network
     */
    routes: Array<Network.Route>;

    /**
     * Array of IDs of Servers attached to this Network
     */
    servers: Array<number>;

    /**
     * Array subnets allocated in this Network
     */
    subnets: Array<Network.Subnet>;

    /**
     * Array of IDs of Load Balancers attached to this Network
     */
    load_balancers?: Array<number>;
  }

  export namespace Network {
    /**
     * Protection configuration for the Resource
     */
    export interface Protection {
      /**
       * If true, prevents the Resource from being deleted | If true, prevents the
       * Network from being deleted
       */
      delete: boolean;
    }

    /**
     * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route |
     * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route
     */
    export interface Route {
      /**
       * Destination network or host of this route. Must not overlap with an existing
       * ip_range in any subnets or with any destinations in other routes or with the
       * first IP of the networks ip_range or with 172.31.1.1. Must be one of the private
       * IPv4 ranges of RFC1918.
       */
      destination: string;

      /**
       * Gateway for the route. Cannot be the first IP of the networks ip_range and also
       * cannot be 172.31.1.1 as this IP is being used as a gateway for the public
       * network interface of Servers. | Gateway for the route. Cannot be the first IP of
       * the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being
       * used as a gateway for the public network interface of Servers.
       */
      gateway: string;
    }

    export interface Subnet {
      /**
       * Gateway for Servers attached to this subnet. For subnets of type Server this is
       * always the first IP of the network IP range.
       */
      gateway: string;

      /**
       * Name of Network zone. The Location object contains the `network_zone` property
       * each Location belongs to.
       */
      network_zone: string;

      /**
       * Type of Subnetwork
       */
      type: 'cloud' | 'server' | 'vswitch';

      /**
       * Range to allocate IPs from. Must be a Subnet of the ip_range of the parent
       * network object and must not overlap with any other subnets or with any
       * destinations in routes. Minimum Network size is /30. We suggest that you pick a
       * bigger Network with a /24 netmask.
       */
      ip_range?: string;

      /**
       * ID of the robot vSwitch if the subnet is of type vswitch.
       */
      vswitch_id?: number | null;
    }
  }
}

/**
 * Response to PUT https://api.hetzner.cloud/v1/networks/{id}
 */
export interface NetworkUpdateResponse {
  network?: NetworkUpdateResponse.Network;
}

export namespace NetworkUpdateResponse {
  export interface Network {
    /**
     * ID of the Network
     */
    id: number;

    /**
     * Point in time when the Network was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Indicates if the routes from this network should be exposed to the vSwitch
     * connection. The exposing only takes effect if a vSwitch connection is active.
     *
     * Currently the default route 0.0.0.0/0 is not exposed to the vSwitch connection.
     * We are aware of the issue and are working on a solution.
     */
    expose_routes_to_vswitch: boolean;

    /**
     * IPv4 prefix of the whole Network
     */
    ip_range: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Network
     */
    name: string;

    /**
     * Protection configuration for the Resource
     */
    protection: Network.Protection;

    /**
     * Array of routes set in this Network
     */
    routes: Array<Network.Route>;

    /**
     * Array of IDs of Servers attached to this Network
     */
    servers: Array<number>;

    /**
     * Array subnets allocated in this Network
     */
    subnets: Array<Network.Subnet>;

    /**
     * Array of IDs of Load Balancers attached to this Network
     */
    load_balancers?: Array<number>;
  }

  export namespace Network {
    /**
     * Protection configuration for the Resource
     */
    export interface Protection {
      /**
       * If true, prevents the Resource from being deleted | If true, prevents the
       * Network from being deleted
       */
      delete: boolean;
    }

    /**
     * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route |
     * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route
     */
    export interface Route {
      /**
       * Destination network or host of this route. Must not overlap with an existing
       * ip_range in any subnets or with any destinations in other routes or with the
       * first IP of the networks ip_range or with 172.31.1.1. Must be one of the private
       * IPv4 ranges of RFC1918.
       */
      destination: string;

      /**
       * Gateway for the route. Cannot be the first IP of the networks ip_range and also
       * cannot be 172.31.1.1 as this IP is being used as a gateway for the public
       * network interface of Servers. | Gateway for the route. Cannot be the first IP of
       * the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being
       * used as a gateway for the public network interface of Servers.
       */
      gateway: string;
    }

    export interface Subnet {
      /**
       * Gateway for Servers attached to this subnet. For subnets of type Server this is
       * always the first IP of the network IP range.
       */
      gateway: string;

      /**
       * Name of Network zone. The Location object contains the `network_zone` property
       * each Location belongs to.
       */
      network_zone: string;

      /**
       * Type of Subnetwork
       */
      type: 'cloud' | 'server' | 'vswitch';

      /**
       * Range to allocate IPs from. Must be a Subnet of the ip_range of the parent
       * network object and must not overlap with any other subnets or with any
       * destinations in routes. Minimum Network size is /30. We suggest that you pick a
       * bigger Network with a /24 netmask.
       */
      ip_range?: string;

      /**
       * ID of the robot vSwitch if the subnet is of type vswitch.
       */
      vswitch_id?: number | null;
    }
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/networks
 */
export interface NetworkListResponse {
  networks: Array<NetworkListResponse.Network>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

export namespace NetworkListResponse {
  export interface Network {
    /**
     * ID of the Network
     */
    id: number;

    /**
     * Point in time when the Network was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Indicates if the routes from this network should be exposed to the vSwitch
     * connection. The exposing only takes effect if a vSwitch connection is active.
     *
     * Currently the default route 0.0.0.0/0 is not exposed to the vSwitch connection.
     * We are aware of the issue and are working on a solution.
     */
    expose_routes_to_vswitch: boolean;

    /**
     * IPv4 prefix of the whole Network
     */
    ip_range: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Network
     */
    name: string;

    /**
     * Protection configuration for the Resource
     */
    protection: Network.Protection;

    /**
     * Array of routes set in this Network
     */
    routes: Array<Network.Route>;

    /**
     * Array of IDs of Servers attached to this Network
     */
    servers: Array<number>;

    /**
     * Array subnets allocated in this Network
     */
    subnets: Array<Network.Subnet>;

    /**
     * Array of IDs of Load Balancers attached to this Network
     */
    load_balancers?: Array<number>;
  }

  export namespace Network {
    /**
     * Protection configuration for the Resource
     */
    export interface Protection {
      /**
       * If true, prevents the Resource from being deleted | If true, prevents the
       * Network from being deleted
       */
      delete: boolean;
    }

    /**
     * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route |
     * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route
     */
    export interface Route {
      /**
       * Destination network or host of this route. Must not overlap with an existing
       * ip_range in any subnets or with any destinations in other routes or with the
       * first IP of the networks ip_range or with 172.31.1.1. Must be one of the private
       * IPv4 ranges of RFC1918.
       */
      destination: string;

      /**
       * Gateway for the route. Cannot be the first IP of the networks ip_range and also
       * cannot be 172.31.1.1 as this IP is being used as a gateway for the public
       * network interface of Servers. | Gateway for the route. Cannot be the first IP of
       * the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being
       * used as a gateway for the public network interface of Servers.
       */
      gateway: string;
    }

    export interface Subnet {
      /**
       * Gateway for Servers attached to this subnet. For subnets of type Server this is
       * always the first IP of the network IP range.
       */
      gateway: string;

      /**
       * Name of Network zone. The Location object contains the `network_zone` property
       * each Location belongs to.
       */
      network_zone: string;

      /**
       * Type of Subnetwork
       */
      type: 'cloud' | 'server' | 'vswitch';

      /**
       * Range to allocate IPs from. Must be a Subnet of the ip_range of the parent
       * network object and must not overlap with any other subnets or with any
       * destinations in routes. Minimum Network size is /30. We suggest that you pick a
       * bigger Network with a /24 netmask.
       */
      ip_range?: string;

      /**
       * ID of the robot vSwitch if the subnet is of type vswitch.
       */
      vswitch_id?: number | null;
    }
  }
}

export interface NetworkCreateParams {
  /**
   * IP range of the whole network which must span all included subnets. Must be one
   * of the private IPv4 ranges of RFC1918. Minimum network size is /24. We highly
   * recommend that you pick a larger network with a /16 netmask.
   */
  ip_range: string;

  /**
   * Name of the network
   */
  name: string;

  /**
   * Indicates if the routes from this network should be exposed to the vSwitch
   * connection. The exposing only takes effect if a vSwitch connection is active.
   *
   * Currently the default route 0.0.0.0/0 is not exposed to the vSwitch connection.
   * We are aware of the issue and are working on a solution.
   */
  expose_routes_to_vswitch?: boolean;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * Array of routes set in this network. The destination of the route must be one of
   * the private IPv4 ranges of RFC1918. The gateway must be a subnet/IP of the
   * ip_range of the network object. The destination must not overlap with an
   * existing ip_range in any subnets or with any destinations in other routes or
   * with the first IP of the networks ip_range or with 172.31.1.1. The gateway
   * cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1.
   */
  routes?: Array<NetworkCreateParams.Route>;

  /**
   * Array of subnets allocated.
   */
  subnets?: Array<NetworkCreateParams.Subnet>;
}

export namespace NetworkCreateParams {
  /**
   * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route |
   * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route
   */
  export interface Route {
    /**
     * Destination network or host of this route. Must not overlap with an existing
     * ip_range in any subnets or with any destinations in other routes or with the
     * first IP of the networks ip_range or with 172.31.1.1. Must be one of the private
     * IPv4 ranges of RFC1918.
     */
    destination: string;

    /**
     * Gateway for the route. Cannot be the first IP of the networks ip_range and also
     * cannot be 172.31.1.1 as this IP is being used as a gateway for the public
     * network interface of Servers. | Gateway for the route. Cannot be the first IP of
     * the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP is being
     * used as a gateway for the public network interface of Servers.
     */
    gateway: string;
  }

  /**
   * Subnets divide the ip_range from the parent Network object into multiple
   * Subnetworks that you can use for different specific purposes.
   */
  export interface Subnet {
    /**
     * Name of Network zone. The Location object contains the `network_zone` property
     * each Location belongs to.
     */
    network_zone: string;

    /**
     * Type of Subnetwork
     */
    type: 'cloud' | 'server' | 'vswitch';

    /**
     * Range to allocate IPs from. Must be a Subnet of the ip_range of the parent
     * network object and must not overlap with any other subnets or with any
     * destinations in routes. Minimum Network size is /30. We suggest that you pick a
     * bigger Network with a /24 netmask. | Range to allocate IPs from. Must be a
     * Subnet of the ip_range of the parent network object and must not overlap with
     * any other subnets or with any destinations in routes. If the Subnet is of type
     * vSwitch, it also can not overlap with any gateway in routes. Minimum Network
     * size is /30. We suggest that you pick a bigger Network with a /24 netmask.
     */
    ip_range?: string;

    /**
     * ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch.
     */
    vswitch_id?: number;
  }
}

export interface NetworkUpdateParams {
  /**
   * Indicates if the routes from this network should be exposed to the vSwitch
   * connection. The exposing only takes effect if a vSwitch connection is active.
   *
   * Currently the default route 0.0.0.0/0 is not exposed to the vSwitch connection.
   * We are aware of the issue and are working on a solution.
   */
  expose_routes_to_vswitch?: boolean;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * New network name
   */
  name?: string;
}

export interface NetworkListParams {
  /**
   * Can be used to filter networks by labels. The response will only contain
   * networks with a matching label selector pattern.
   */
  label_selector?: string;

  /**
   * Can be used to filter networks by their name. The response will only contain the
   * networks matching the specified name.
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
}

export namespace Networks {
  export import NetworkCreateResponse = API.NetworkCreateResponse;
  export import NetworkRetrieveResponse = API.NetworkRetrieveResponse;
  export import NetworkUpdateResponse = API.NetworkUpdateResponse;
  export import NetworkListResponse = API.NetworkListResponse;
  export import NetworkCreateParams = API.NetworkCreateParams;
  export import NetworkUpdateParams = API.NetworkUpdateParams;
  export import NetworkListParams = API.NetworkListParams;

  export import Actions = API.Actions;
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionAddRouteResponse = API.ActionAddRouteResponse;
  export import ActionAddSubnetResponse = API.ActionAddSubnetResponse;
  export import ActionChangeIpRangeResponse = API.ActionChangeIpRangeResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionDeleteRouteResponse = API.ActionDeleteRouteResponse;
  export import ActionDeleteSubnetResponse = API.ActionDeleteSubnetResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAddRouteParams = API.ActionAddRouteParams;
  export import ActionAddSubnetParams = API.ActionAddSubnetParams;
  export import ActionChangeIpRangeParams = API.ActionChangeIpRangeParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
  export import ActionDeleteRouteParams = API.ActionDeleteRouteParams;
  export import ActionDeleteSubnetParams = API.ActionDeleteSubnetParams;
}
