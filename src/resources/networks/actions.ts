// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Actions extends APIResource {
  /**
   * Returns a specific Action for a Network.
   */
  retrieve(
    id: number,
    actionId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.get(`/networks/${id}/actions/${actionId}`, options);
  }

  /**
   * Returns all Action objects for a Network. You can sort the results by using the
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
    return this.get(`/networks/${id}/actions`, { query, ...options });
  }

  /**
   * Adds a route entry to a Network.
   *
   * Note: if the Network object changes during the request, the response will be a
   * “conflict” error.
   */
  addRoute(
    id: number,
    body: ActionAddRouteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/networks/${id}/actions/add_route`, { body, ...options });
  }

  /**
   * Adds a new subnet object to the Network. If you do not specify an `ip_range` for
   * the subnet we will automatically pick the first available /24 range for you if
   * possible.
   *
   * Note: if the parent Network object changes during the request, the response will
   * be a “conflict” error.
   */
  addSubnet(
    id: number,
    body: ActionAddSubnetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/networks/${id}/actions/add_subnet`, { body, ...options });
  }

  /**
   * Changes the IP range of a Network. IP ranges can only be extended and never
   * shrunk. You can only add IPs at the end of an existing IP range. This means that
   * the IP part of your existing range must stay the same and you can only change
   * its netmask.
   *
   * For example if you have a range `10.0.0.0/16` you want to extend then your new
   * range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change
   * to a number that is smaller than `16` thereby increasing the IP range. So valid
   * entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.
   *
   * After changing the IP range you will have to adjust the routes on your connected
   * Servers by either rebooting them or manually changing the routes to your private
   * Network interface.
   *
   * Note: if the Network object changes during the request, the response will be a
   * “conflict” error.
   */
  changeIpRange(
    id: number,
    body: ActionChangeIpRangeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/networks/${id}/actions/change_ip_range`, { body, ...options });
  }

  /**
   * Changes the protection configuration of a Network.
   *
   * Note: if the Network object changes during the request, the response will be a
   * “conflict” error.
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
    return this.post(`/networks/${id}/actions/change_protection`, { body, ...options });
  }

  /**
   * Delete a route entry from a Network.
   *
   * Note: if the Network object changes during the request, the response will be a
   * “conflict” error.
   */
  deleteRoute(
    id: number,
    body: ActionDeleteRouteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/networks/${id}/actions/delete_route`, { body, ...options });
  }

  /**
   * Deletes a single subnet entry from a Network. You cannot delete subnets which
   * still have Servers attached. If you have Servers attached you first need to
   * detach all Servers that use IPs from this subnet before you can delete the
   * subnet.
   *
   * Note: if the Network object changes during the request, the response will be a
   * “conflict” error.
   */
  deleteSubnet(
    id: number,
    body: ActionDeleteSubnetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/networks/${id}/actions/delete_subnet`, { body, ...options });
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

export interface ActionAddRouteParams {
  /**
   * Destination network or host of this route. Must not overlap with an existing
   * ip_range in any subnets or with any destinations in other routes or with the
   * first IP of the networks ip_range or with 172.31.1.1. Must be one of the private
   * IPv4 ranges of RFC1918.
   */
  destination: string;

  /**
   * Gateway for the route. Cannot be the first IP of the networks ip_range, an IP
   * behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the
   * public network interface of Servers.
   */
  gateway: string;
}

export interface ActionAddSubnetParams {
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
   * destinations in routes. If the Subnet is of type vSwitch, it also can not
   * overlap with any gateway in routes. Minimum Network size is /30. We suggest that
   * you pick a bigger Network with a /24 netmask.
   */
  ip_range?: string;

  /**
   * ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch.
   */
  vswitch_id?: number;
}

export interface ActionChangeIpRangeParams {
  /**
   * The new prefix for the whole Network
   */
  ip_range: string;
}

export interface ActionChangeProtectionParams {
  /**
   * If true, prevents the Network from being deleted
   */
  delete?: boolean;
}

export interface ActionDeleteRouteParams {
  /**
   * Destination network or host of this route. Must not overlap with an existing
   * ip_range in any subnets or with any destinations in other routes or with the
   * first IP of the networks ip_range or with 172.31.1.1. Must be one of the private
   * IPv4 ranges of RFC1918.
   */
  destination: string;

  /**
   * Gateway for the route. Cannot be the first IP of the networks ip_range, an IP
   * behind a vSwitch or 172.31.1.1, as this IP is being used as a gateway for the
   * public network interface of Servers.
   */
  gateway: string;
}

export interface ActionDeleteSubnetParams {
  /**
   * IP range of subnet to delete
   */
  ip_range: string;
}

export namespace Actions {
  export import ActionListParams = API.ActionListParams;
  export import ActionAddRouteParams = API.ActionAddRouteParams;
  export import ActionAddSubnetParams = API.ActionAddSubnetParams;
  export import ActionChangeIpRangeParams = API.ActionChangeIpRangeParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
  export import ActionDeleteRouteParams = API.ActionDeleteRouteParams;
  export import ActionDeleteSubnetParams = API.ActionDeleteSubnetParams;
}
