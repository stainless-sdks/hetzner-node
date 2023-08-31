// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Datacenters extends APIResource {
  /**
   * Returns a specific Datacenter object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<DatacenterRetrieveResponse> {
    return this.get(`/datacenters/${id}`, options);
  }

  /**
   * Returns all Datacenter objects.
   */
  list(query?: DatacenterListParams, options?: Core.RequestOptions): Core.APIPromise<DatacenterListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DatacenterListResponse>;
  list(
    query: DatacenterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatacenterListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/datacenters', { query, ...options });
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/datacenters/{id}
 */
export interface DatacenterRetrieveResponse {
  /**
   * Datacenter this Primary IP is located at | Datacenter this Resource is located
   * at
   */
  datacenter: DatacenterRetrieveResponse.Datacenter;
}

export namespace DatacenterRetrieveResponse {
  /**
   * Datacenter this Primary IP is located at | Datacenter this Resource is located
   * at
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

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
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
    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
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
}

/**
 * Response to GET https://api.hetzner.cloud/v1/datacenters
 */
export interface DatacenterListResponse {
  datacenters: Array<DatacenterListResponse.Datacenter>;

  /**
   * Metadata contained in the response
   */
  meta: Shared.ResponseMeta;

  /**
   * The Datacenter which is recommended to be used to create new Servers.
   */
  recommendation: number;
}

export namespace DatacenterListResponse {
  /**
   * Datacenter this Primary IP is located at | Datacenter this Resource is located
   * at
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

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
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
    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
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
}

export interface DatacenterListParams {
  /**
   * Can be used to filter Datacenters by their name. The response will only contain
   * the Datacenter matching the specified name. When the name does not match the
   * Datacenter name format, an `invalid_input` error is returned.
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
  sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc';
}

export namespace Datacenters {
  export import DatacenterRetrieveResponse = API.DatacenterRetrieveResponse;
  export import DatacenterListResponse = API.DatacenterListResponse;
  export import DatacenterListParams = API.DatacenterListParams;
}
