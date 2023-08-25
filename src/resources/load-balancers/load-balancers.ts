// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import { Metrics } from './metrics';
import * as API from './index';

export class LoadBalancers extends APIResource {
  actions: Actions = new Actions(this.client);
  metrics: Metrics = new Metrics(this.client);

  /**
   * Creates a Load Balancer.
   *
   * #### Call specific error codes
   *
   * | Code                                    | Description                                                                                           |
   * | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
   * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
   * | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
   * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
   * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
   * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
   * | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
   * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
   */
  create(
    body: LoadBalancerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerCreateResponse> {
    return this.post('/load_balancers', { body, ...options });
  }

  /**
   * Gets a specific Load Balancer object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<LoadBalancerRetrieveResponse> {
    return this.get(`/load_balancers/${id}`, options);
  }

  /**
   * Updates a Load Balancer. You can update a Load Balancer’s name and a Load
   * Balancer’s labels.
   *
   * Note that when updating labels, the Load Balancer’s current set of labels will
   * be replaced with the labels provided in the request body. So, for example, if
   * you want to add a new label, you have to provide all existing labels plus the
   * new label in the request body.
   *
   * Note: if the Load Balancer object changes during the request, the response will
   * be a “conflict” error.
   */
  update(
    id: number,
    body?: LoadBalancerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<LoadBalancerUpdateResponse>;
  update(
    id: number,
    body: LoadBalancerUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/load_balancers/${id}`, { body, ...options });
  }

  /**
   * Gets all existing Load Balancers that you have available.
   */
  list(
    query?: LoadBalancerListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LoadBalancerListResponse>;
  list(
    query: LoadBalancerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoadBalancerListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/load_balancers', { query, ...options });
  }

  /**
   * Deletes a Load Balancer.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/load_balancers/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

export interface LoadBalancerService {
  /**
   * Port the Load Balancer will balance to
   */
  destination_port: number;

  /**
   * Service health check
   */
  health_check: LoadBalancerServiceHealthCheck;

  /**
   * Port the Load Balancer listens on
   */
  listen_port: number;

  /**
   * Protocol of the Load Balancer
   */
  protocol: 'tcp' | 'http' | 'https';

  /**
   * Is Proxyprotocol enabled or not
   */
  proxyprotocol: boolean;

  /**
   * Configuration option for protocols http and https
   */
  http?: LoadBalancerServiceHTTP;
}

/**
 * Service health check
 */
export interface LoadBalancerServiceHealthCheck {
  /**
   * Time interval in seconds health checks are performed
   */
  interval: number;

  /**
   * Port the health check will be performed on
   */
  port: number;

  /**
   * Type of the health check
   */
  protocol: 'tcp' | 'http';

  /**
   * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy
   * target needs the same number of successful retries to become healthy again
   */
  retries: number;

  /**
   * Time in seconds after an attempt is considered a timeout
   */
  timeout: number;

  /**
   * Additional configuration for protocol http
   */
  http?: LoadBalancerServiceHealthCheck.HTTP;
}

export namespace LoadBalancerServiceHealthCheck {
  /**
   * Additional configuration for protocol http
   */
  export interface HTTP {
    /**
     * Host header to send in the HTTP request. May not contain spaces, percent or
     * backslash symbols. Can be null, in that case no host header is sent.
     */
    domain: string | null;

    /**
     * HTTP path to use for health checks. May not contain literal spaces, use
     * percent-encoding instead.
     */
    path: string;

    /**
     * String that must be contained in HTTP response in order to pass the health check
     */
    response?: string;

    /**
     * List of returned HTTP status codes in order to pass the health check. Supports
     * the wildcards `?` for exactly one character and `*` for multiple ones. The
     * default is to pass the health check for any status code between 2?? and 3??.
     */
    status_codes?: Array<string>;

    /**
     * Use HTTPS for health check
     */
    tls?: boolean;
  }
}

/**
 * Configuration option for protocols http and https
 */
export interface LoadBalancerServiceHTTP {
  /**
   * IDs of the Certificates to use for TLS/SSL termination by the Load Balancer;
   * empty for TLS/SSL passthrough or if `protocol` is "http"
   */
  certificates?: Array<number>;

  /**
   * Lifetime of the cookie used for sticky sessions
   */
  cookie_lifetime?: number;

  /**
   * Name of the cookie used for sticky sessions
   */
  cookie_name?: string;

  /**
   * Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default
   * `false`
   */
  redirect_http?: boolean;

  /**
   * Use sticky sessions. Only available if protocol is "http" or "https". Default
   * `false`
   */
  sticky_sessions?: boolean;
}

export interface LoadBalancerTarget {
  /**
   * Type of the resource
   */
  type: 'server' | 'label_selector' | 'ip';

  /**
   * List of health statuses of the services on this target. Only present for target
   * types "server" and "ip".
   */
  health_status?: LoadBalancerTargetHealthStatus;

  /**
   * IP targets where the traffic should be routed to. It is only possible to use the
   * (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project
   * owner. IPs belonging to other users are blocked. Additionally IPs belonging to
   * services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as
   * well. Only present for target type "ip".
   */
  ip?: LoadBalancerTargetIp;

  /**
   * Label selector used to determine targets. Only present for target type
   * "label_selector".
   */
  label_selector?: LoadBalancerTargetLabelSelector;

  /**
   * Server where the traffic should be routed to. Only present for target type
   * "server".
   */
  server?: LoadBalancerTargetServer;

  /**
   * List of resolved label selector target Servers. Only present for type
   * "label_selector".
   */
  targets?: Array<LoadBalancerTargetTarget>;

  /**
   * Use the private network IP instead of the public IP. Default value is false.
   * Only present for target types "server" and "label_selector".
   */
  use_private_ip?: boolean;
}

/**
 * List of health statuses of the services on this target. Only present for target
 * types "server" and "ip".
 */
export type LoadBalancerTargetHealthStatus = Array<LoadBalancerTargetHealthStatus>;

export namespace LoadBalancerTargetHealthStatus {
  export interface LoadBalancerTargetHealthStatus {
    listen_port?: number;

    status?: 'healthy' | 'unhealthy' | 'unknown';
  }
}

/**
 * IP targets where the traffic should be routed to. It is only possible to use the
 * (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project
 * owner. IPs belonging to other users are blocked. Additionally IPs belonging to
 * services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as
 * well. Only present for target type "ip".
 */
export interface LoadBalancerTargetIp {
  /**
   * IP of a server that belongs to the same customer (public IPv4/IPv6) or private
   * IP in a Subnetwork type vswitch.
   */
  ip: string;
}

/**
 * Label selector used to determine targets. Only present for target type
 * "label_selector".
 */
export interface LoadBalancerTargetLabelSelector {
  /**
   * Label selector
   */
  selector: string;
}

/**
 * Server where the traffic should be routed to. Only present for target type
 * "server".
 */
export interface LoadBalancerTargetServer {
  /**
   * ID of the Server
   */
  id: number;
}

export interface LoadBalancerTargetTarget {
  /**
   * List of health statuses of the services on this target. Only present for target
   * types "server" and "ip".
   */
  health_status?: LoadBalancerTargetHealthStatus;

  /**
   * Server where the traffic should be routed to. Only present for target type
   * "server".
   */
  server?: LoadBalancerTargetServer;

  /**
   * Type of the resource. Here always "server".
   */
  type?: string;

  /**
   * Use the private network IP instead of the public IP. Default value is false.
   * Only present for target types "server" and "label_selector".
   */
  use_private_ip?: boolean;
}

export interface LoadBalancerCreateResponse {
  action: Shared.Action;

  load_balancer: LoadBalancerCreateResponse.LoadBalancer;
}

export namespace LoadBalancerCreateResponse {
  export interface LoadBalancer {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Algorithm of the Load Balancer
     */
    algorithm: LoadBalancer.Algorithm;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Free Traffic for the current billing period in bytes
     */
    included_traffic: number;

    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoing_traffic: number | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    load_balancer_type: LoadBalancer.LoadBalancerType;

    location: LoadBalancer.Location;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoing_traffic: number | null;

    /**
     * Private networks information
     */
    private_net: Array<LoadBalancer.PrivateNet>;

    /**
     * Protection configuration for the Resource
     */
    protection: LoadBalancer.Protection;

    /**
     * Public network information
     */
    public_net: LoadBalancer.PublicNet;

    /**
     * List of services that belong to this Load Balancer
     */
    services: Array<LoadBalancerService>;

    /**
     * List of targets that belong to this Load Balancer
     */
    targets: Array<LoadBalancerTarget>;
  }

  export namespace LoadBalancer {
    /**
     * Algorithm of the Load Balancer
     */
    export interface Algorithm {
      /**
       * Type of the algorithm
       */
      type: 'round_robin' | 'least_connections';
    }

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

    export interface PrivateNet {
      /**
       * IP address (v4) of this Load Balancer in this Network
       */
      ip?: string;

      /**
       * ID of the Network
       */
      network?: number;
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

    /**
     * Public network information
     */
    export interface PublicNet {
      /**
       * Public Interface enabled or not
       */
      enabled: boolean;

      /**
       * IP address (v4)
       */
      ipv4: PublicNet.Ipv4;

      /**
       * IP address (v6)
       */
      ipv6: PublicNet.Ipv6;
    }

    export namespace PublicNet {
      /**
       * IP address (v4)
       */
      export interface Ipv4 {
        /**
         * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
         */
        dns_ptr?: string | null;

        /**
         * IP address (v4) of this Load Balancer
         */
        ip?: string | null;
      }

      /**
       * IP address (v6)
       */
      export interface Ipv6 {
        /**
         * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
         */
        dns_ptr?: string | null;

        /**
         * IP address (v6) of this Load Balancer
         */
        ip?: string | null;
      }
    }
  }
}

export interface LoadBalancerRetrieveResponse {
  load_balancer: LoadBalancerRetrieveResponse.LoadBalancer;
}

export namespace LoadBalancerRetrieveResponse {
  export interface LoadBalancer {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Algorithm of the Load Balancer
     */
    algorithm: LoadBalancer.Algorithm;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Free Traffic for the current billing period in bytes
     */
    included_traffic: number;

    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoing_traffic: number | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    load_balancer_type: LoadBalancer.LoadBalancerType;

    location: LoadBalancer.Location;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoing_traffic: number | null;

    /**
     * Private networks information
     */
    private_net: Array<LoadBalancer.PrivateNet>;

    /**
     * Protection configuration for the Resource
     */
    protection: LoadBalancer.Protection;

    /**
     * Public network information
     */
    public_net: LoadBalancer.PublicNet;

    /**
     * List of services that belong to this Load Balancer
     */
    services: Array<LoadBalancerService>;

    /**
     * List of targets that belong to this Load Balancer
     */
    targets: Array<LoadBalancerTarget>;
  }

  export namespace LoadBalancer {
    /**
     * Algorithm of the Load Balancer
     */
    export interface Algorithm {
      /**
       * Type of the algorithm
       */
      type: 'round_robin' | 'least_connections';
    }

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

    export interface PrivateNet {
      /**
       * IP address (v4) of this Load Balancer in this Network
       */
      ip?: string;

      /**
       * ID of the Network
       */
      network?: number;
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

    /**
     * Public network information
     */
    export interface PublicNet {
      /**
       * Public Interface enabled or not
       */
      enabled: boolean;

      /**
       * IP address (v4)
       */
      ipv4: PublicNet.Ipv4;

      /**
       * IP address (v6)
       */
      ipv6: PublicNet.Ipv6;
    }

    export namespace PublicNet {
      /**
       * IP address (v4)
       */
      export interface Ipv4 {
        /**
         * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
         */
        dns_ptr?: string | null;

        /**
         * IP address (v4) of this Load Balancer
         */
        ip?: string | null;
      }

      /**
       * IP address (v6)
       */
      export interface Ipv6 {
        /**
         * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
         */
        dns_ptr?: string | null;

        /**
         * IP address (v6) of this Load Balancer
         */
        ip?: string | null;
      }
    }
  }
}

export interface LoadBalancerUpdateResponse {
  load_balancer: LoadBalancerUpdateResponse.LoadBalancer;
}

export namespace LoadBalancerUpdateResponse {
  export interface LoadBalancer {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Algorithm of the Load Balancer
     */
    algorithm: LoadBalancer.Algorithm;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Free Traffic for the current billing period in bytes
     */
    included_traffic: number;

    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoing_traffic: number | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    load_balancer_type: LoadBalancer.LoadBalancerType;

    location: LoadBalancer.Location;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoing_traffic: number | null;

    /**
     * Private networks information
     */
    private_net: Array<LoadBalancer.PrivateNet>;

    /**
     * Protection configuration for the Resource
     */
    protection: LoadBalancer.Protection;

    /**
     * Public network information
     */
    public_net: LoadBalancer.PublicNet;

    /**
     * List of services that belong to this Load Balancer
     */
    services: Array<LoadBalancerService>;

    /**
     * List of targets that belong to this Load Balancer
     */
    targets: Array<LoadBalancerTarget>;
  }

  export namespace LoadBalancer {
    /**
     * Algorithm of the Load Balancer
     */
    export interface Algorithm {
      /**
       * Type of the algorithm
       */
      type: 'round_robin' | 'least_connections';
    }

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

    export interface PrivateNet {
      /**
       * IP address (v4) of this Load Balancer in this Network
       */
      ip?: string;

      /**
       * ID of the Network
       */
      network?: number;
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

    /**
     * Public network information
     */
    export interface PublicNet {
      /**
       * Public Interface enabled or not
       */
      enabled: boolean;

      /**
       * IP address (v4)
       */
      ipv4: PublicNet.Ipv4;

      /**
       * IP address (v6)
       */
      ipv6: PublicNet.Ipv6;
    }

    export namespace PublicNet {
      /**
       * IP address (v4)
       */
      export interface Ipv4 {
        /**
         * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
         */
        dns_ptr?: string | null;

        /**
         * IP address (v4) of this Load Balancer
         */
        ip?: string | null;
      }

      /**
       * IP address (v6)
       */
      export interface Ipv6 {
        /**
         * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
         */
        dns_ptr?: string | null;

        /**
         * IP address (v6) of this Load Balancer
         */
        ip?: string | null;
      }
    }
  }
}

export interface LoadBalancerListResponse {
  load_balancers: Array<LoadBalancerListResponse.LoadBalancer>;

  meta?: Shared.ResponseMeta;
}

export namespace LoadBalancerListResponse {
  export interface LoadBalancer {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Algorithm of the Load Balancer
     */
    algorithm: LoadBalancer.Algorithm;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Free Traffic for the current billing period in bytes
     */
    included_traffic: number;

    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoing_traffic: number | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    load_balancer_type: LoadBalancer.LoadBalancerType;

    location: LoadBalancer.Location;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoing_traffic: number | null;

    /**
     * Private networks information
     */
    private_net: Array<LoadBalancer.PrivateNet>;

    /**
     * Protection configuration for the Resource
     */
    protection: LoadBalancer.Protection;

    /**
     * Public network information
     */
    public_net: LoadBalancer.PublicNet;

    /**
     * List of services that belong to this Load Balancer
     */
    services: Array<LoadBalancerService>;

    /**
     * List of targets that belong to this Load Balancer
     */
    targets: Array<LoadBalancerTarget>;
  }

  export namespace LoadBalancer {
    /**
     * Algorithm of the Load Balancer
     */
    export interface Algorithm {
      /**
       * Type of the algorithm
       */
      type: 'round_robin' | 'least_connections';
    }

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

    export interface PrivateNet {
      /**
       * IP address (v4) of this Load Balancer in this Network
       */
      ip?: string;

      /**
       * ID of the Network
       */
      network?: number;
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

    /**
     * Public network information
     */
    export interface PublicNet {
      /**
       * Public Interface enabled or not
       */
      enabled: boolean;

      /**
       * IP address (v4)
       */
      ipv4: PublicNet.Ipv4;

      /**
       * IP address (v6)
       */
      ipv6: PublicNet.Ipv6;
    }

    export namespace PublicNet {
      /**
       * IP address (v4)
       */
      export interface Ipv4 {
        /**
         * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
         */
        dns_ptr?: string | null;

        /**
         * IP address (v4) of this Load Balancer
         */
        ip?: string | null;
      }

      /**
       * IP address (v6)
       */
      export interface Ipv6 {
        /**
         * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
         */
        dns_ptr?: string | null;

        /**
         * IP address (v6) of this Load Balancer
         */
        ip?: string | null;
      }
    }
  }
}

export interface LoadBalancerCreateParams {
  /**
   * Algorithm of the Load Balancer
   */
  algorithm: LoadBalancerCreateParams.Algorithm;

  /**
   * ID or name of the Load Balancer type this Load Balancer should be created with
   */
  load_balancer_type: string;

  /**
   * Name of the Load Balancer
   */
  name: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: LoadBalancerCreateParams.Labels;

  /**
   * ID or name of Location to create Load Balancer in
   */
  location?: string;

  /**
   * ID of the network the Load Balancer should be attached to on creation
   */
  network?: number;

  /**
   * Name of network zone
   */
  network_zone?: string;

  /**
   * Enable or disable the public interface of the Load Balancer
   */
  public_interface?: boolean;

  /**
   * Array of services
   */
  services?: Array<LoadBalancerService>;

  /**
   * Array of targets
   */
  targets?: Array<LoadBalancerTarget>;
}

export namespace LoadBalancerCreateParams {
  /**
   * Algorithm of the Load Balancer
   */
  export interface Algorithm {
    /**
     * Type of the algorithm
     */
    type: 'round_robin' | 'least_connections';
  }

  /**
   * User-defined labels (key-value pairs)
   */
  export interface Labels {
    /**
     * New label
     */
    labelkey?: string;
  }
}

export interface LoadBalancerUpdateParams {
  /**
   * User-defined labels (key-value pairs)
   */
  labels?: unknown;

  /**
   * New Load Balancer name
   */
  name?: string;
}

export interface LoadBalancerListParams {
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

export namespace LoadBalancers {
  export import LoadBalancerService = API.LoadBalancerService;
  export import LoadBalancerServiceHealthCheck = API.LoadBalancerServiceHealthCheck;
  export import LoadBalancerServiceHTTP = API.LoadBalancerServiceHTTP;
  export import LoadBalancerTarget = API.LoadBalancerTarget;
  export import LoadBalancerTargetHealthStatus = API.LoadBalancerTargetHealthStatus;
  export import LoadBalancerTargetIp = API.LoadBalancerTargetIp;
  export import LoadBalancerTargetLabelSelector = API.LoadBalancerTargetLabelSelector;
  export import LoadBalancerTargetServer = API.LoadBalancerTargetServer;
  export import LoadBalancerTargetTarget = API.LoadBalancerTargetTarget;
  export import LoadBalancerCreateResponse = API.LoadBalancerCreateResponse;
  export import LoadBalancerRetrieveResponse = API.LoadBalancerRetrieveResponse;
  export import LoadBalancerUpdateResponse = API.LoadBalancerUpdateResponse;
  export import LoadBalancerListResponse = API.LoadBalancerListResponse;
  export import LoadBalancerCreateParams = API.LoadBalancerCreateParams;
  export import LoadBalancerUpdateParams = API.LoadBalancerUpdateParams;
  export import LoadBalancerListParams = API.LoadBalancerListParams;

  export import Actions = API.Actions;
  export import ActionListParams = API.ActionListParams;
  export import ActionAddServiceParams = API.ActionAddServiceParams;
  export import ActionAssTargetParams = API.ActionAssTargetParams;
  export import ActionAttachToNetworkParams = API.ActionAttachToNetworkParams;
  export import ActionChangeAlgorithmParams = API.ActionChangeAlgorithmParams;
  export import ActionChangeDnsPtrParams = API.ActionChangeDnsPtrParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
  export import ActionChangeTypeParams = API.ActionChangeTypeParams;
  export import ActionDeleteServiceParams = API.ActionDeleteServiceParams;
  export import ActionDetachFromNetworkParams = API.ActionDetachFromNetworkParams;
  export import ActionRemoveTargetParams = API.ActionRemoveTargetParams;
  export import ActionUpdateServiceParams = API.ActionUpdateServiceParams;

  export import Metrics = API.Metrics;
  export import MetricListResponse = API.MetricListResponse;
  export import MetricListParams = API.MetricListParams;
}