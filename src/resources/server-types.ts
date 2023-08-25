// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as API from './index';

export class ServerTypes extends APIResource {
  /**
   * Gets a specific Server type object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<ServerTypeRetrieveResponse> {
    return this.get(`/server_types/${id}`, options);
  }

  /**
   * Gets all Server type objects.
   */
  list(query?: ServerTypeListParams, options?: Core.RequestOptions): Core.APIPromise<ServerTypeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ServerTypeListResponse>;
  list(
    query: ServerTypeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerTypeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/server_types', { query, ...options });
  }
}

/**
 * Describes if, when & how the resources was deprecated. If this field is set to
 * `null` the resource is not deprecated. If it has a value, it is considered
 * deprecated.
 */
export interface DeprecationInfo {
  /**
   * Date of when the deprecation was announced.
   */
  announced: string;

  /**
   * After the time in this field, the resource will not be available from the
   * general listing endpoint of the resource type, and it can not be used in new
   * resources. For example, if this is an image, you can not create new servers with
   * this image after the mentioned date.
   */
  unavailable_after: string;
}

export interface ServerTypeRetrieveResponse {
  server_type: ServerTypeRetrieveResponse.ServerType;
}

export namespace ServerTypeRetrieveResponse {
  export interface ServerType {
    /**
     * ID of the Server type
     */
    id: number;

    /**
     * Type of cpu architecture
     */
    architecture: 'x86' | 'arm';

    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;

    /**
     * Type of cpu
     */
    cpu_type: 'shared' | 'dedicated';

    /**
     * This field is deprecated. Use the deprecation object instead
     */
    deprecated: boolean;

    /**
     * Description of the Server type
     */
    description: string;

    /**
     * Disk size a Server of this type will have in GB
     */
    disk: number;

    /**
     * Free traffic per month in bytes
     */
    included_traffic: number;

    /**
     * Memory a Server of this type will have in GB
     */
    memory: number;

    /**
     * Unique identifier of the Server type
     */
    name: string;

    /**
     * Prices in different Locations
     */
    prices: Array<ServerType.Price>;

    /**
     * Type of Server boot drive. Local has higher speed. Network has better
     * availability.
     */
    storage_type: 'local' | 'network';

    /**
     * Describes if, when & how the resources was deprecated. If this field is set to
     * `null` the resource is not deprecated. If it has a value, it is considered
     * deprecated.
     */
    deprecation?: DeprecationInfo | null;
  }

  export namespace ServerType {
    export interface Price {
      /**
       * Name of the Location the price is for
       */
      location: string;

      /**
       * Hourly costs for a Server type in this Location
       */
      price_hourly: Price.PriceHourly;

      /**
       * Monthly costs for a Server type in this Location
       */
      price_monthly: Price.PriceMonthly;
    }

    export namespace Price {
      /**
       * Hourly costs for a Server type in this Location
       */
      export interface PriceHourly {
        /**
         * Price with VAT added
         */
        gross: string;

        /**
         * Price without VAT
         */
        net: string;
      }

      /**
       * Monthly costs for a Server type in this Location
       */
      export interface PriceMonthly {
        /**
         * Price with VAT added
         */
        gross: string;

        /**
         * Price without VAT
         */
        net: string;
      }
    }
  }
}

export interface ServerTypeListResponse {
  server_types: Array<ServerTypeListResponse.ServerType>;
}

export namespace ServerTypeListResponse {
  export interface ServerType {
    /**
     * ID of the Server type
     */
    id: number;

    /**
     * Type of cpu architecture
     */
    architecture: 'x86' | 'arm';

    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;

    /**
     * Type of cpu
     */
    cpu_type: 'shared' | 'dedicated';

    /**
     * This field is deprecated. Use the deprecation object instead
     */
    deprecated: boolean;

    /**
     * Description of the Server type
     */
    description: string;

    /**
     * Disk size a Server of this type will have in GB
     */
    disk: number;

    /**
     * Free traffic per month in bytes
     */
    included_traffic: number;

    /**
     * Memory a Server of this type will have in GB
     */
    memory: number;

    /**
     * Unique identifier of the Server type
     */
    name: string;

    /**
     * Prices in different Locations
     */
    prices: Array<ServerType.Price>;

    /**
     * Type of Server boot drive. Local has higher speed. Network has better
     * availability.
     */
    storage_type: 'local' | 'network';

    /**
     * Describes if, when & how the resources was deprecated. If this field is set to
     * `null` the resource is not deprecated. If it has a value, it is considered
     * deprecated.
     */
    deprecation?: DeprecationInfo | null;
  }

  export namespace ServerType {
    export interface Price {
      /**
       * Name of the Location the price is for
       */
      location: string;

      /**
       * Hourly costs for a Server type in this Location
       */
      price_hourly: Price.PriceHourly;

      /**
       * Monthly costs for a Server type in this Location
       */
      price_monthly: Price.PriceMonthly;
    }

    export namespace Price {
      /**
       * Hourly costs for a Server type in this Location
       */
      export interface PriceHourly {
        /**
         * Price with VAT added
         */
        gross: string;

        /**
         * Price without VAT
         */
        net: string;
      }

      /**
       * Monthly costs for a Server type in this Location
       */
      export interface PriceMonthly {
        /**
         * Price with VAT added
         */
        gross: string;

        /**
         * Price without VAT
         */
        net: string;
      }
    }
  }
}

export interface ServerTypeListParams {
  /**
   * Can be used to filter Server types by their name. The response will only contain
   * the Server type matching the specified name.
   */
  name?: string;
}

export namespace ServerTypes {
  export import DeprecationInfo = API.DeprecationInfo;
  export import ServerTypeRetrieveResponse = API.ServerTypeRetrieveResponse;
  export import ServerTypeListResponse = API.ServerTypeListResponse;
  export import ServerTypeListParams = API.ServerTypeListParams;
}
