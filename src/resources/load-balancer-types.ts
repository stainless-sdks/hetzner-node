// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as API from './index';

export class LoadBalancerTypes extends APIResource {
  /**
   * Gets a specific Load Balancer type object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<LoadBalancerTypeRetrieveResponse> {
    return this.get(`/load_balancer_types/${id}`, options);
  }

  /**
   * Gets all Load Balancer type objects.
   */
  list(
    query?: LoadBalancerTypeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerTypeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LoadBalancerTypeListResponse>;
  list(
    query: LoadBalancerTypeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerTypeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/load_balancer_types', { query, ...options });
  }
}

export interface LoadBalancerTypeRetrieveResponse {
  load_balancer_type?: LoadBalancerTypeRetrieveResponse.LoadBalancerType;
}

export namespace LoadBalancerTypeRetrieveResponse {
  export interface LoadBalancerType {
    /**
     * ID of the Load Balancer type
     */
    id: number;

    /**
     * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
     */
    deprecated: string | null;

    /**
     * Description of the Load Balancer type
     */
    description: string;

    /**
     * Number of SSL Certificates that can be assigned to a single Load Balancer
     */
    max_assigned_certificates: number;

    /**
     * Number of maximum simultaneous open connections
     */
    max_connections: number;

    /**
     * Number of services a Load Balancer of this type can have
     */
    max_services: number;

    /**
     * Number of targets a single Load Balancer can have
     */
    max_targets: number;

    /**
     * Unique identifier of the Load Balancer type
     */
    name: string;

    /**
     * Prices in different network zones
     */
    prices: Array<LoadBalancerType.Price>;
  }

  export namespace LoadBalancerType {
    export interface Price {
      /**
       * Name of the Location the price is for
       */
      location: string;

      /**
       * Hourly costs for a Resource in this Location
       */
      price_hourly: Price.PriceHourly;

      /**
       * Monthly costs for a Resource in this Location
       */
      price_monthly: Price.PriceMonthly;
    }

    export namespace Price {
      /**
       * Hourly costs for a Resource in this Location
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
       * Monthly costs for a Resource in this Location
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

export interface LoadBalancerTypeListResponse {
  load_balancer_types: Array<LoadBalancerTypeListResponse.LoadBalancerType>;
}

export namespace LoadBalancerTypeListResponse {
  export interface LoadBalancerType {
    /**
     * ID of the Load Balancer type
     */
    id: number;

    /**
     * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
     */
    deprecated: string | null;

    /**
     * Description of the Load Balancer type
     */
    description: string;

    /**
     * Number of SSL Certificates that can be assigned to a single Load Balancer
     */
    max_assigned_certificates: number;

    /**
     * Number of maximum simultaneous open connections
     */
    max_connections: number;

    /**
     * Number of services a Load Balancer of this type can have
     */
    max_services: number;

    /**
     * Number of targets a single Load Balancer can have
     */
    max_targets: number;

    /**
     * Unique identifier of the Load Balancer type
     */
    name: string;

    /**
     * Prices in different network zones
     */
    prices: Array<LoadBalancerType.Price>;
  }

  export namespace LoadBalancerType {
    export interface Price {
      /**
       * Name of the Location the price is for
       */
      location: string;

      /**
       * Hourly costs for a Resource in this Location
       */
      price_hourly: Price.PriceHourly;

      /**
       * Monthly costs for a Resource in this Location
       */
      price_monthly: Price.PriceMonthly;
    }

    export namespace Price {
      /**
       * Hourly costs for a Resource in this Location
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
       * Monthly costs for a Resource in this Location
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

export interface LoadBalancerTypeListParams {
  /**
   * Can be used to filter Load Balancer types by their name. The response will only
   * contain the Load Balancer type matching the specified name.
   */
  name?: string;
}

export namespace LoadBalancerTypes {
  export import LoadBalancerTypeRetrieveResponse = API.LoadBalancerTypeRetrieveResponse;
  export import LoadBalancerTypeListResponse = API.LoadBalancerTypeListResponse;
  export import LoadBalancerTypeListParams = API.LoadBalancerTypeListParams;
}
