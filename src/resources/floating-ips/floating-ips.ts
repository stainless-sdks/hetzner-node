// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import * as API from './index';
import { FloatingIpsPage, FloatingIpsPageParams } from 'hetzner/pagination';

export class FloatingIps extends APIResource {
  actions: Actions = new Actions(this.client);

  /**
   * Creates a new Floating IP assigned to a Server. If you want to create a Floating
   * IP that is not bound to a Server, you need to provide the `home_location` key
   * instead of `server`. This can be either the ID or the name of the Location this
   * IP shall be created in. Note that a Floating IP can be assigned to a Server in
   * any Location later on. For optimal routing it is advised to use the Floating IP
   * in the same Location it was created in.
   */
  create(
    body: FloatingIpCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FloatingIpCreateResponse> {
    return this.post('/floating_ips', { body, ...options });
  }

  /**
   * Returns a specific Floating IP object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<FloatingIpRetrieveResponse> {
    return this.get(`/floating_ips/${id}`, options);
  }

  /**
   * Updates the description or labels of a Floating IP. Also note that when updating
   * labels, the Floating IP’s current set of labels will be replaced with the labels
   * provided in the request body. So, for example, if you want to add a new label,
   * you have to provide all existing labels plus the new label in the request body.
   */
  update(
    id: number,
    body?: FloatingIpUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FloatingIpUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<FloatingIpUpdateResponse>;
  update(
    id: number,
    body: FloatingIpUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FloatingIpUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/floating_ips/${id}`, { body, ...options });
  }

  /**
   * Returns all Floating IP objects.
   */
  list(
    query?: FloatingIpListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FloatingIpListResponsesFloatingIpsPage, FloatingIpListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<FloatingIpListResponsesFloatingIpsPage, FloatingIpListResponse>;
  list(
    query: FloatingIpListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FloatingIpListResponsesFloatingIpsPage, FloatingIpListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/floating_ips', FloatingIpListResponsesFloatingIpsPage, { query, ...options });
  }

  /**
   * Deletes a Floating IP. If it is currently assigned to a Server it will
   * automatically get unassigned.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/floating_ips/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

export class FloatingIpListResponsesFloatingIpsPage extends FloatingIpsPage<FloatingIpListResponse> {}
// alias so we can export it in the namespace
type _FloatingIpListResponsesFloatingIpsPage = FloatingIpListResponsesFloatingIpsPage;

/**
 * Response to POST https://api.hetzner.cloud/v1/floating_ips
 */
export interface FloatingIpCreateResponse {
  floating_ip: FloatingIpCreateResponse.FloatingIp;

  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action?: Shared.Action;
}

export namespace FloatingIpCreateResponse {
  export interface FloatingIp {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Whether the IP is blocked
     */
    blocked: boolean;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Description of the Resource
     */
    description: string | null;

    /**
     * Array of reverse DNS entries
     */
    dns_ptr: Array<FloatingIp.DnsPtr>;

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    home_location: FloatingIp.HomeLocation;

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
    protection: FloatingIp.Protection;

    /**
     * ID of the Server the Floating IP is assigned to, null if it is not assigned at
     * all
     */
    server: number | null;

    /**
     * The type of the IP
     */
    type: 'ipv4' | 'ipv6';
  }

  export namespace FloatingIp {
    export interface DnsPtr {
      /**
       * DNS pointer for the specific IP address
       */
      dns_ptr: string;

      /**
       * Single IPv4 or IPv6 address | Single IPv6 address of this Server for which the
       * reverse DNS entry has been set up
       */
      ip: string;
    }

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    export interface HomeLocation {
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
     * Protection configuration for the Resource
     */
    export interface Protection {
      /**
       * If true, prevents the Resource from being deleted | If true, prevents the
       * Network from being deleted
       */
      delete: boolean;
    }
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/floating_ips/{id}
 */
export interface FloatingIpRetrieveResponse {
  floating_ip: FloatingIpRetrieveResponse.FloatingIp;
}

export namespace FloatingIpRetrieveResponse {
  export interface FloatingIp {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Whether the IP is blocked
     */
    blocked: boolean;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Description of the Resource
     */
    description: string | null;

    /**
     * Array of reverse DNS entries
     */
    dns_ptr: Array<FloatingIp.DnsPtr>;

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    home_location: FloatingIp.HomeLocation;

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
    protection: FloatingIp.Protection;

    /**
     * ID of the Server the Floating IP is assigned to, null if it is not assigned at
     * all
     */
    server: number | null;

    /**
     * The type of the IP
     */
    type: 'ipv4' | 'ipv6';
  }

  export namespace FloatingIp {
    export interface DnsPtr {
      /**
       * DNS pointer for the specific IP address
       */
      dns_ptr: string;

      /**
       * Single IPv4 or IPv6 address | Single IPv6 address of this Server for which the
       * reverse DNS entry has been set up
       */
      ip: string;
    }

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    export interface HomeLocation {
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
     * Protection configuration for the Resource
     */
    export interface Protection {
      /**
       * If true, prevents the Resource from being deleted | If true, prevents the
       * Network from being deleted
       */
      delete: boolean;
    }
  }
}

/**
 * Response to PUT https://api.hetzner.cloud/v1/floating_ips/{id}
 */
export interface FloatingIpUpdateResponse {
  floating_ip: FloatingIpUpdateResponse.FloatingIp;
}

export namespace FloatingIpUpdateResponse {
  export interface FloatingIp {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Whether the IP is blocked
     */
    blocked: boolean;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Description of the Resource
     */
    description: string | null;

    /**
     * Array of reverse DNS entries
     */
    dns_ptr: Array<FloatingIp.DnsPtr>;

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    home_location: FloatingIp.HomeLocation;

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
    protection: FloatingIp.Protection;

    /**
     * ID of the Server the Floating IP is assigned to, null if it is not assigned at
     * all
     */
    server: number | null;

    /**
     * The type of the IP
     */
    type: 'ipv4' | 'ipv6';
  }

  export namespace FloatingIp {
    export interface DnsPtr {
      /**
       * DNS pointer for the specific IP address
       */
      dns_ptr: string;

      /**
       * Single IPv4 or IPv6 address | Single IPv6 address of this Server for which the
       * reverse DNS entry has been set up
       */
      ip: string;
    }

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    export interface HomeLocation {
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
     * Protection configuration for the Resource
     */
    export interface Protection {
      /**
       * If true, prevents the Resource from being deleted | If true, prevents the
       * Network from being deleted
       */
      delete: boolean;
    }
  }
}

export interface FloatingIpListResponse {
  /**
   * ID of the Resource
   */
  id: number;

  /**
   * Whether the IP is blocked
   */
  blocked: boolean;

  /**
   * Point in time when the Resource was created (in ISO-8601 format)
   */
  created: string;

  /**
   * Description of the Resource
   */
  description: string | null;

  /**
   * Array of reverse DNS entries
   */
  dns_ptr: Array<FloatingIpListResponse.DnsPtr>;

  /**
   * Location the Floating IP was created in. Routing is optimized for this Location.
   * | Location of the Volume. Volume can only be attached to Servers in the same
   * Location.
   */
  home_location: FloatingIpListResponse.HomeLocation;

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
  protection: FloatingIpListResponse.Protection;

  /**
   * ID of the Server the Floating IP is assigned to, null if it is not assigned at
   * all
   */
  server: number | null;

  /**
   * The type of the IP
   */
  type: 'ipv4' | 'ipv6';
}

export namespace FloatingIpListResponse {
  export interface DnsPtr {
    /**
     * DNS pointer for the specific IP address
     */
    dns_ptr: string;

    /**
     * Single IPv4 or IPv6 address | Single IPv6 address of this Server for which the
     * reverse DNS entry has been set up
     */
    ip: string;
  }

  /**
   * Location the Floating IP was created in. Routing is optimized for this Location.
   * | Location of the Volume. Volume can only be attached to Servers in the same
   * Location.
   */
  export interface HomeLocation {
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
   * Protection configuration for the Resource
   */
  export interface Protection {
    /**
     * If true, prevents the Resource from being deleted | If true, prevents the
     * Network from being deleted
     */
    delete: boolean;
  }
}

export interface FloatingIpCreateParams {
  /**
   * The type of the IP
   */
  type: 'ipv4' | 'ipv6';

  description?: string;

  /**
   * Home Location (routing is optimized for that Location). Only optional if Server
   * argument is passed.
   */
  home_location?: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  name?: string;

  /**
   * ID of the Server to assign the Floating IP to
   */
  server?: number;
}

export interface FloatingIpUpdateParams {
  /**
   * New Description to set
   */
  description?: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * New unique name to set
   */
  name?: string;
}

export interface FloatingIpListParams extends FloatingIpsPageParams {
  /**
   * Can be used to filter Floating IPs by labels. The response will only contain
   * Floating IPs matching the label selector.
   */
  label_selector?: string;

  /**
   * Can be used to filter Floating IPs by their name. The response will only contain
   * the Floating IP matching the specified name.
   */
  name?: string;

  /**
   * Can be used multiple times. Choices id id:asc id:desc created created:asc
   * created:desc
   */
  sort?: 'id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc';
}

export namespace FloatingIps {
  export import FloatingIpCreateResponse = API.FloatingIpCreateResponse;
  export import FloatingIpRetrieveResponse = API.FloatingIpRetrieveResponse;
  export import FloatingIpUpdateResponse = API.FloatingIpUpdateResponse;
  export import FloatingIpListResponse = API.FloatingIpListResponse;
  export type FloatingIpListResponsesFloatingIpsPage = _FloatingIpListResponsesFloatingIpsPage;
  export import FloatingIpCreateParams = API.FloatingIpCreateParams;
  export import FloatingIpUpdateParams = API.FloatingIpUpdateParams;
  export import FloatingIpListParams = API.FloatingIpListParams;

  export import Actions = API.Actions;
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionAssignResponse = API.ActionAssignResponse;
  export import ActionChangeDnsPtrResponse = API.ActionChangeDnsPtrResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionUnassignResponse = API.ActionUnassignResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAssignParams = API.ActionAssignParams;
  export import ActionChangeDnsPtrParams = API.ActionChangeDnsPtrParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
}
