// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import * as API from './index';

export class Pricing extends APIResource {
  /**
   * Returns prices for all resources available on the platform. VAT and currency of
   * the Project owner are used for calculations.
   *
   * Both net and gross prices are included in the response.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<PricingRetrieveResponse> {
    return this.get('/pricing', options);
  }
}

export interface FloatingIPPriceDetails {
  /**
   * Floating IP type costs per Location
   */
  prices: Array<PricePerTimeMonthly>;

  /**
   * The type of the IP
   */
  type: 'ipv4' | 'ipv6';
}

/**
 * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
 * this Location | Monthly costs for a Floating IP type in this Location | Hourly
 * costs for a Load Balancer type in this network zone | Monthly costs for a Load
 * Balancer type in this network zone | Hourly costs for a Primary IP type in this
 * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
 * for a Server type in this Location | Monthly costs for a Server type in this
 * Location
 */
export interface Price {
  /**
   * Price with VAT added
   */
  gross: string;

  /**
   * Price without VAT
   */
  net: string;
}

export interface PricePerTimeMonthly {
  /**
   * Name of the Location the price is for
   */
  location: string;

  /**
   * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
   * this Location | Monthly costs for a Floating IP type in this Location | Hourly
   * costs for a Load Balancer type in this network zone | Monthly costs for a Load
   * Balancer type in this network zone | Hourly costs for a Primary IP type in this
   * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
   * for a Server type in this Location | Monthly costs for a Server type in this
   * Location
   */
  price_monthly: Price;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/pricing
 */
export interface PricingRetrieveResponse {
  pricing: PricingRetrieveResponse.Pricing;
}

export namespace PricingRetrieveResponse {
  export interface Pricing {
    /**
     * Currency the returned prices are expressed in, coded according to ISO 4217
     */
    currency: string;

    /**
     * The cost of one Floating IP per month
     */
    floating_ip: Pricing.FloatingIP;

    /**
     * Costs of Floating IPs types per Location and type
     */
    floating_ips: Array<FloatingIPPriceDetails>;

    /**
     * The cost of Image per GB/month
     */
    image: Pricing.Image;

    /**
     * Costs of Load Balancer types per Location and type
     */
    load_balancer_types: Array<Pricing.LoadBalancerType>;

    /**
     * Costs of Primary IPs types per Location
     */
    primary_ips: Array<Pricing.PrimaryIP>;

    /**
     * Will increase base Server costs by specific percentage
     */
    server_backup: Pricing.ServerBackup;

    /**
     * Costs of Server types per Location and type
     */
    server_types: Array<Pricing.ServerType>;

    /**
     * The cost of additional traffic per TB
     */
    traffic: Pricing.Traffic;

    /**
     * The VAT rate used for calculating prices with VAT
     */
    vat_rate: string;

    /**
     * The cost of Volume per GB/month
     */
    volume: Pricing.Volume;
  }

  export namespace Pricing {
    /**
     * The cost of one Floating IP per month
     */
    export interface FloatingIP {
      /**
       * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
       * this Location | Monthly costs for a Floating IP type in this Location | Hourly
       * costs for a Load Balancer type in this network zone | Monthly costs for a Load
       * Balancer type in this network zone | Hourly costs for a Primary IP type in this
       * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
       * for a Server type in this Location | Monthly costs for a Server type in this
       * Location
       */
      price_monthly: Price;
    }

    /**
     * The cost of Image per GB/month
     */
    export interface Image {
      /**
       * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
       * this Location | Monthly costs for a Floating IP type in this Location | Hourly
       * costs for a Load Balancer type in this network zone | Monthly costs for a Load
       * Balancer type in this network zone | Hourly costs for a Primary IP type in this
       * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
       * for a Server type in this Location | Monthly costs for a Server type in this
       * Location
       */
      price_per_gb_month: Price;
    }

    export interface LoadBalancerType {
      /**
       * ID of the Load Balancer type the price is for
       */
      id: number;

      /**
       * Name of the Load Balancer type the price is for
       */
      name: string;

      /**
       * Load Balancer type costs per Location
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
         * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
         * this Location | Monthly costs for a Floating IP type in this Location | Hourly
         * costs for a Load Balancer type in this network zone | Monthly costs for a Load
         * Balancer type in this network zone | Hourly costs for a Primary IP type in this
         * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
         * for a Server type in this Location | Monthly costs for a Server type in this
         * Location
         */
        price_hourly: Price;

        /**
         * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
         * this Location | Monthly costs for a Floating IP type in this Location | Hourly
         * costs for a Load Balancer type in this network zone | Monthly costs for a Load
         * Balancer type in this network zone | Hourly costs for a Primary IP type in this
         * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
         * for a Server type in this Location | Monthly costs for a Server type in this
         * Location
         */
        price_monthly: Price;
      }
    }

    export interface PrimaryIP {
      /**
       * Primary IP type costs per Location
       */
      prices: Array<PrimaryIP.Price>;

      /**
       * The type of the IP
       */
      type: 'ipv4' | 'ipv6';
    }

    export namespace PrimaryIP {
      export interface Price {
        /**
         * Name of the Location the price is for
         */
        location: string;

        /**
         * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
         * this Location | Monthly costs for a Floating IP type in this Location | Hourly
         * costs for a Load Balancer type in this network zone | Monthly costs for a Load
         * Balancer type in this network zone | Hourly costs for a Primary IP type in this
         * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
         * for a Server type in this Location | Monthly costs for a Server type in this
         * Location
         */
        price_hourly: Price;

        /**
         * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
         * this Location | Monthly costs for a Floating IP type in this Location | Hourly
         * costs for a Load Balancer type in this network zone | Monthly costs for a Load
         * Balancer type in this network zone | Hourly costs for a Primary IP type in this
         * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
         * for a Server type in this Location | Monthly costs for a Server type in this
         * Location
         */
        price_monthly: Price;
      }
    }

    /**
     * Will increase base Server costs by specific percentage
     */
    export interface ServerBackup {
      /**
       * Percentage by how much the base price will increase
       */
      percentage: string;
    }

    export interface ServerType {
      /**
       * ID of the Server type the price is for
       */
      id: number;

      /**
       * Name of the Server type the price is for
       */
      name: string;

      /**
       * Server type costs per Location
       */
      prices: Array<ServerType.Price>;
    }

    export namespace ServerType {
      export interface Price {
        /**
         * Name of the Location the price is for
         */
        location: string;

        /**
         * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
         * this Location | Monthly costs for a Floating IP type in this Location | Hourly
         * costs for a Load Balancer type in this network zone | Monthly costs for a Load
         * Balancer type in this network zone | Hourly costs for a Primary IP type in this
         * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
         * for a Server type in this Location | Monthly costs for a Server type in this
         * Location
         */
        price_hourly: Price;

        /**
         * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
         * this Location | Monthly costs for a Floating IP type in this Location | Hourly
         * costs for a Load Balancer type in this network zone | Monthly costs for a Load
         * Balancer type in this network zone | Hourly costs for a Primary IP type in this
         * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
         * for a Server type in this Location | Monthly costs for a Server type in this
         * Location
         */
        price_monthly: Price;
      }
    }

    /**
     * The cost of additional traffic per TB
     */
    export interface Traffic {
      /**
       * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
       * this Location | Monthly costs for a Floating IP type in this Location | Hourly
       * costs for a Load Balancer type in this network zone | Monthly costs for a Load
       * Balancer type in this network zone | Hourly costs for a Primary IP type in this
       * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
       * for a Server type in this Location | Monthly costs for a Server type in this
       * Location
       */
      price_per_tb: Price;
    }

    /**
     * The cost of Volume per GB/month
     */
    export interface Volume {
      /**
       * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
       * this Location | Monthly costs for a Floating IP type in this Location | Hourly
       * costs for a Load Balancer type in this network zone | Monthly costs for a Load
       * Balancer type in this network zone | Hourly costs for a Primary IP type in this
       * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
       * for a Server type in this Location | Monthly costs for a Server type in this
       * Location
       */
      price_per_gb_month: Price;
    }
  }
}

export namespace Pricing {
  export import FloatingIPPriceDetails = API.FloatingIPPriceDetails;
  export import Price = API.Price;
  export import PricePerTimeMonthly = API.PricePerTimeMonthly;
  export import PricingRetrieveResponse = API.PricingRetrieveResponse;
}
