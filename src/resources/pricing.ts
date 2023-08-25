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
    floating_ip: Pricing.FloatingIp;

    /**
     * Costs of Floating IPs types per Location and type
     */
    floating_ips: Array<Pricing.FloatingIp>;

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
    primary_ips: Array<Pricing.PrimaryIp>;

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
    export interface FloatingIp {
      price_monthly: FloatingIp.PriceMonthly;
    }

    export namespace FloatingIp {
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

    export interface FloatingIp {
      /**
       * Floating IP type costs per Location
       */
      prices: Array<FloatingIp.Price>;

      /**
       * The type of the Floating IP
       */
      type: 'ipv4' | 'ipv6';
    }

    export namespace FloatingIp {
      export interface Price {
        /**
         * Name of the Location the price is for
         */
        location: string;

        /**
         * Monthly costs for a Floating IP type in this Location
         */
        price_monthly: Price.PriceMonthly;
      }

      export namespace Price {
        /**
         * Monthly costs for a Floating IP type in this Location
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

    /**
     * The cost of Image per GB/month
     */
    export interface Image {
      price_per_gb_month: Image.PricePerGBMonth;
    }

    export namespace Image {
      export interface PricePerGBMonth {
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
         * Hourly costs for a Load Balancer type in this network zone
         */
        price_hourly: Price.PriceHourly;

        /**
         * Monthly costs for a Load Balancer type in this network zone
         */
        price_monthly: Price.PriceMonthly;
      }

      export namespace Price {
        /**
         * Hourly costs for a Load Balancer type in this network zone
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
         * Monthly costs for a Load Balancer type in this network zone
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

    export interface PrimaryIp {
      /**
       * Primary IP type costs per Location
       */
      prices: Array<PrimaryIp.Price>;

      /**
       * The type of the Primary IP
       */
      type: 'ipv4' | 'ipv6';
    }

    export namespace PrimaryIp {
      export interface Price {
        /**
         * Name of the Location the price is for
         */
        location: string;

        /**
         * Hourly costs for a Primary IP type in this Location
         */
        price_hourly: Price.PriceHourly;

        /**
         * Monthly costs for a Primary IP type in this Location
         */
        price_monthly: Price.PriceMonthly;
      }

      export namespace Price {
        /**
         * Hourly costs for a Primary IP type in this Location
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
         * Monthly costs for a Primary IP type in this Location
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

    /**
     * The cost of additional traffic per TB
     */
    export interface Traffic {
      price_per_tb: Traffic.PricePerTb;
    }

    export namespace Traffic {
      export interface PricePerTb {
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

    /**
     * The cost of Volume per GB/month
     */
    export interface Volume {
      price_per_gb_month: Volume.PricePerGBMonth;
    }

    export namespace Volume {
      export interface PricePerGBMonth {
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

export namespace Pricing {
  export import PricingRetrieveResponse = API.PricingRetrieveResponse;
}
