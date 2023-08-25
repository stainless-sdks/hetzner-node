// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import * as API from './index';

export class PrimaryIps extends APIResource {
  actions: Actions = new Actions(this.client);

  /**
   * Creates a new Primary IP, optionally assigned to a Server.
   *
   * If you want to create a Primary IP that is not assigned to a Server, you need to
   * provide the `datacenter` key instead of `assignee_id`. This can be either the ID
   * or the name of the Datacenter this Primary IP shall be created in.
   *
   * Note that a Primary IP can only be assigned to a Server in the same Datacenter
   * later on.
   *
   * #### Call specific error codes
   *
   * | Code                 | Description                                                  |
   * | -------------------- | ------------------------------------------------------------ |
   * | `server_not_stopped` | The specified server is running, but needs to be powered off |
   * | `server_has_ipv4`    | The server already has an ipv4 address                       |
   * | `server_has_ipv6`    | The server already has an ipv6 address                       |
   */
  create(
    body: PrimaryIpCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrimaryIpCreateResponse> {
    return this.post('/primary_ips', { body, ...options });
  }

  /**
   * Returns a specific Primary IP object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<PrimaryIpResponse> {
    return this.get(`/primary_ips/${id}`, options);
  }

  /**
   * Updates the Primary IP.
   *
   * Note that when updating labels, the Primary IP's current set of labels will be
   * replaced with the labels provided in the request body. So, for example, if you
   * want to add a new label, you have to provide all existing labels plus the new
   * label in the request body.
   *
   * If the Primary IP object changes during the request, the response will be a
   * “conflict” error.
   */
  update(
    id: number,
    body?: PrimaryIpUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrimaryIpResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<PrimaryIpResponse>;
  update(
    id: number,
    body: PrimaryIpUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrimaryIpResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/primary_ips/${id}`, { body, ...options });
  }

  /**
   * Returns all Primary IP objects.
   */
  list(query?: PrimaryIpListParams, options?: Core.RequestOptions): Core.APIPromise<PrimaryIpListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PrimaryIpListResponse>;
  list(
    query: PrimaryIpListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrimaryIpListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/primary_ips', { query, ...options });
  }

  /**
   * Deletes a Primary IP.
   *
   * The Primary IP may be assigned to a Server. In this case it is unassigned
   * automatically. The Server must be powered off (status `off`) in order for this
   * operation to succeed.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/primary_ips/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

export interface PrimaryIp {
  /**
   * ID of the Resource
   */
  id: number;

  /**
   * ID of the resource the Primary IP is assigned to, null if it is not assigned at
   * all
   */
  assignee_id: number | null;

  /**
   * Resource type the Primary IP can be assigned to
   */
  assignee_type: 'server';

  /**
   * Delete this Primary IP when the resource it is assigned to is deleted
   */
  auto_delete: boolean;

  /**
   * Whether the IP is blocked
   */
  blocked: boolean;

  /**
   * Point in time when the Resource was created (in ISO-8601 format)
   */
  created: string;

  /**
   * Datacenter this Primary IP is located at
   */
  datacenter: PrimaryIp.Datacenter;

  /**
   * Array of reverse DNS entries
   */
  dns_ptr: Array<PrimaryIp.DnsPtr>;

  /**
   * IP address
   */
  ip: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels: Record<string, string>;

  /**
   * Name of the Resource. Must be unique per Project.
   */
  name: string;

  /**
   * Protection configuration for the Resource
   */
  protection: PrimaryIp.Protection;

  /**
   * Type of the Primary IP
   */
  type: 'ipv4' | 'ipv6';
}

export namespace PrimaryIp {
  /**
   * Datacenter this Primary IP is located at
   */
  export interface Datacenter {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Description of the Datacenter
     */
    description: string;

    location: Datacenter.Location;

    /**
     * Unique identifier of the Datacenter
     */
    name: string;

    /**
     * The Server types the Datacenter can handle
     */
    server_types: Datacenter.ServerTypes;
  }

  export namespace Datacenter {
    export interface Location {
      /**
       * ID of the Location
       */
      id: number;

      /**
       * City the Location is closest to
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 code of the country the Location resides in
       */
      country: string;

      /**
       * Description of the Location
       */
      description: string;

      /**
       * Latitude of the city closest to the Location
       */
      latitude: number;

      /**
       * Longitude of the city closest to the Location
       */
      longitude: number;

      /**
       * Unique identifier of the Location
       */
      name: string;

      /**
       * Name of network zone this Location resides in
       */
      network_zone: string;
    }

    /**
     * The Server types the Datacenter can handle
     */
    export interface ServerTypes {
      /**
       * IDs of Server types that are supported and for which the Datacenter has enough
       * resources left
       */
      available: Array<number>;

      /**
       * IDs of Server types that are supported and for which the Datacenter has enough
       * resources left
       */
      available_for_migration: Array<number>;

      /**
       * IDs of Server types that are supported in the Datacenter
       */
      supported: Array<number>;
    }
  }

  export interface DnsPtr {
    /**
     * DNS pointer for the specific IP address
     */
    dns_ptr: string;

    /**
     * Single IPv4 or IPv6 address
     */
    ip: string;
  }

  /**
   * Protection configuration for the Resource
   */
  export interface Protection {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
  }
}

export interface PrimaryIpResponse {
  primary_ip: PrimaryIp;
}

export interface PrimaryIpCreateResponse {
  primary_ip: PrimaryIp;

  action?: Shared.Action;
}

export interface PrimaryIpListResponse {
  primary_ips: Array<PrimaryIp>;

  meta?: Shared.ResponseMeta;
}

export interface PrimaryIpCreateParams {
  /**
   * Resource type the Primary IP can be assigned to
   */
  assignee_type: 'server';

  name: string;

  /**
   * Primary IP type
   */
  type: 'ipv4' | 'ipv6';

  /**
   * ID of the resource the Primary IP should be assigned to. Omitted if it should
   * not be assigned.
   */
  assignee_id?: number;

  /**
   * Delete the Primary IP when the Server it is assigned to is deleted. If omitted
   * defaults to `false`.
   */
  auto_delete?: boolean;

  /**
   * ID or name of Datacenter the Primary IP will be bound to. Needs to be omitted if
   * `assignee_id` is passed.
   */
  datacenter?: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: unknown;
}

export interface PrimaryIpUpdateParams {
  /**
   * Delete this Primary IP when the resource it is assigned to is deleted
   */
  auto_delete?: boolean;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: unknown;

  /**
   * New unique name to set
   */
  name?: string;
}

export interface PrimaryIpListParams {
  /**
   * Can be used to filter resources by their ip. The response will only contain the
   * resources matching the specified ip.
   */
  ip?: string;

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
   * Can be used multiple times. Choices id id:asc id:desc created created:asc
   * created:desc
   */
  sort?: 'id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc';
}

export namespace PrimaryIps {
  export import PrimaryIp = API.PrimaryIp;
  export import PrimaryIpResponse = API.PrimaryIpResponse;
  export import PrimaryIpCreateResponse = API.PrimaryIpCreateResponse;
  export import PrimaryIpListResponse = API.PrimaryIpListResponse;
  export import PrimaryIpCreateParams = API.PrimaryIpCreateParams;
  export import PrimaryIpUpdateParams = API.PrimaryIpUpdateParams;
  export import PrimaryIpListParams = API.PrimaryIpListParams;

  export import Actions = API.Actions;
  export import ActionListParams = API.ActionListParams;
  export import ActionAssignParams = API.ActionAssignParams;
  export import ActionChangeDnsPtrParams = API.ActionChangeDnsPtrParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
}
