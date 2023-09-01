// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as LoadBalancers from 'hetzner/resources/load-balancers/index';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Actions extends APIResource {
  /**
   * Returns a specific Action for a Load Balancer.
   */
  retrieve(
    id: number,
    actionId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRetrieveResponse> {
    return this.get(`/load_balancers/${id}/actions/${actionId}`, options);
  }

  /**
   * Returns all Action objects for a Load Balancer. You can sort the results by
   * using the `sort` URI parameter, and filter them with the `status` parameter.
   */
  list(
    id: number,
    query?: ActionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionListResponse>;
  list(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionListResponse>;
  list(
    id: number,
    query: ActionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this.get(`/load_balancers/${id}/actions`, { query, ...options });
  }

  /**
   * Adds a service to a Load Balancer.
   *
   * #### Call specific error codes
   *
   * | Code                       | Description                                             |
   * | -------------------------- | ------------------------------------------------------- |
   * | `source_port_already_used` | The source port you are trying to add is already in use |
   */
  addService(
    id: number,
    body: ActionAddServiceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionAddServiceResponse> {
    return this.post(`/load_balancers/${id}/actions/add_service`, { body, ...options });
  }

  /**
   * Adds a target to a Load Balancer.
   *
   * #### Call specific error codes
   *
   * | Code                                    | Description                                                                                           |
   * | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
   * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
   * | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
   * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
   * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
   * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
   * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
   */
  assTarget(
    id: number,
    body: ActionAssTargetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionAssTargetResponse> {
    return this.post(`/load_balancers/${id}/actions/add_target`, { body, ...options });
  }

  /**
   * Attach a Load Balancer to a Network.
   *
   * **Call specific error codes**
   *
   * | Code                             | Description                                                           |
   * | -------------------------------- | --------------------------------------------------------------------- |
   * | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
   * | `ip_not_available`               | The provided Network IP is not available                              |
   * | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
   */
  attachToNetwork(
    id: number,
    body: ActionAttachToNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionAttachToNetworkResponse> {
    return this.post(`/load_balancers/${id}/actions/attach_to_network`, { body, ...options });
  }

  /**
   * Change the algorithm that determines to which target new requests are sent.
   */
  changeAlgorithm(
    id: number,
    body: ActionChangeAlgorithmParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeAlgorithmResponse> {
    return this.post(`/load_balancers/${id}/actions/change_algorithm`, { body, ...options });
  }

  /**
   * Changes the hostname that will appear when getting the hostname belonging to the
   * public IPs (IPv4 and IPv6) of this Load Balancer.
   *
   * Floating IPs assigned to the Server are not affected by this.
   */
  changeDNSPtr(
    id: number,
    body: ActionChangeDNSPtrParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeDNSPtrResponse> {
    return this.post(`/load_balancers/${id}/actions/change_dns_ptr`, { body, ...options });
  }

  /**
   * Changes the protection configuration of a Load Balancer.
   */
  changeProtection(
    id: number,
    body?: ActionChangeProtectionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeProtectionResponse>;
  changeProtection(
    id: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeProtectionResponse>;
  changeProtection(
    id: number,
    body: ActionChangeProtectionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeProtectionResponse> {
    if (isRequestOptions(body)) {
      return this.changeProtection(id, {}, body);
    }
    return this.post(`/load_balancers/${id}/actions/change_protection`, { body, ...options });
  }

  /**
   * Changes the type (Max Services, Max Targets and Max Connections) of a Load
   * Balancer.
   *
   * **Call specific error codes**
   *
   * | Code                         | Description                                                     |
   * | ---------------------------- | --------------------------------------------------------------- |
   * | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
   */
  changeType(
    id: number,
    body: ActionChangeTypeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionChangeTypeResponse> {
    return this.post(`/load_balancers/${id}/actions/change_type`, { body, ...options });
  }

  /**
   * Delete a service of a Load Balancer.
   */
  deleteService(
    id: number,
    body: ActionDeleteServiceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionDeleteServiceResponse> {
    return this.post(`/load_balancers/${id}/actions/delete_service`, { body, ...options });
  }

  /**
   * Detaches a Load Balancer from a network.
   */
  detachFromNetwork(
    id: number,
    body: ActionDetachFromNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionDetachFromNetworkResponse> {
    return this.post(`/load_balancers/${id}/actions/detach_from_network`, { body, ...options });
  }

  /**
   * Disable the public interface of a Load Balancer. The Load Balancer will be not
   * accessible from the internet via its public IPs.
   *
   * #### Call specific error codes
   *
   * | Code                                    | Description                                                                    |
   * | --------------------------------------- | ------------------------------------------------------------------------------ |
   * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                 |
   * | `targets_without_use_private_ip`        | The Load Balancer has targets that use the public IP instead of the private IP |
   */
  disablePublicInterface(
    id: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionDisablePublicInterfaceResponse> {
    return this.post(`/load_balancers/${id}/actions/disable_public_interface`, options);
  }

  /**
   * Enable the public interface of a Load Balancer. The Load Balancer will be
   * accessible from the internet via its public IPs.
   */
  enablePublicInterface(
    id: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionEnablePublicInterfaceResponse> {
    return this.post(`/load_balancers/${id}/actions/enable_public_interface`, options);
  }

  /**
   * Removes a target from a Load Balancer.
   */
  removeTarget(
    id: number,
    body: ActionRemoveTargetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRemoveTargetResponse> {
    return this.post(`/load_balancers/${id}/actions/remove_target`, { body, ...options });
  }

  /**
   * Updates a Load Balancer Service.
   *
   * #### Call specific error codes
   *
   * | Code                       | Description                                             |
   * | -------------------------- | ------------------------------------------------------- |
   * | `source_port_already_used` | The source port you are trying to add is already in use |
   */
  updateService(
    id: number,
    body: ActionUpdateServiceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionUpdateServiceResponse> {
    return this.post(`/load_balancers/${id}/actions/update_service`, { body, ...options });
  }
}

/**
 * Response to GET
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/{action_id}
 */
export interface ActionRetrieveResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}/actions
 */
export interface ActionListResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/add_service
 */
export interface ActionAddServiceResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/add_target
 */
export interface ActionAssTargetResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/attach_to_network
 */
export interface ActionAttachToNetworkResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_algorithm
 */
export interface ActionChangeAlgorithmResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_dns_ptr
 */
export interface ActionChangeDNSPtrResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_protection
 */
export interface ActionChangeProtectionResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_type
 */
export interface ActionChangeTypeResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/delete_service
 */
export interface ActionDeleteServiceResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/detach_from_network
 */
export interface ActionDetachFromNetworkResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/disable_public_interface
 */
export interface ActionDisablePublicInterfaceResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/enable_public_interface
 */
export interface ActionEnablePublicInterfaceResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/remove_target
 */
export interface ActionRemoveTargetResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to POST
 * https://api.hetzner.cloud/v1/load_balancers/{id}/actions/update_service
 */
export interface ActionUpdateServiceResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

export interface ActionListParams {
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
  sort?: Shared.SortParam;

  /**
   * Can be used multiple times, the response will contain only Actions with
   * specified statuses
   */
  status?: Shared.StatusParam;
}

export interface ActionAddServiceParams {
  /**
   * Port the Load Balancer will balance to
   */
  destination_port: number;

  /**
   * Service health check
   */
  health_check: ActionAddServiceParams.HealthCheck;

  /**
   * Port the Load Balancer listens on
   */
  listen_port: number;

  /**
   * Protocol of the Load Balancer
   */
  protocol: 'http' | 'https' | 'tcp';

  /**
   * Is Proxyprotocol enabled or not
   */
  proxyprotocol: boolean;

  /**
   * Configuration option for protocols http and https
   */
  http?: ActionAddServiceParams.HTTP;
}

export namespace ActionAddServiceParams {
  /**
   * Service health check
   */
  export interface HealthCheck {
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
    protocol: 'http' | 'tcp';

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
    http?: HealthCheck.HTTP;
  }

  export namespace HealthCheck {
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
  export interface HTTP {
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
}

export interface ActionAssTargetParams {
  /**
   * Type of the resource
   */
  type: 'ip' | 'label_selector' | 'server';

  /**
   * IP targets where the traffic should be routed to. It is only possible to use the
   * (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project
   * owner. IPs belonging to other users are blocked. Additionally IPs belonging to
   * services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as
   * well. Only present for target type "ip".
   */
  ip?: LoadBalancers.LoadBalancerTargetIP;

  /**
   * Configuration for type LabelSelector, required if type is `label_selector`
   */
  label_selector?: ActionAssTargetParams.LabelSelector;

  /**
   * Configuration for type Server, required if type is `server`
   */
  server?: ActionAssTargetParams.Server;

  /**
   * Use the private network IP instead of the public IP of the Server, requires the
   * Server and Load Balancer to be in the same network. Default value is false.
   */
  use_private_ip?: boolean;
}

export namespace ActionAssTargetParams {
  /**
   * Configuration for type LabelSelector, required if type is `label_selector`
   */
  export interface LabelSelector {
    /**
     * Label selector
     */
    selector: string;
  }

  /**
   * Configuration for type Server, required if type is `server`
   */
  export interface Server {
    /**
     * ID of the Server
     */
    id: number;
  }
}

export interface ActionAttachToNetworkParams {
  /**
   * ID of an existing network to attach the Load Balancer to
   */
  network: number;

  /**
   * IP to request to be assigned to this Load Balancer; if you do not provide this
   * then you will be auto assigned an IP address
   */
  ip?: string;
}

export interface ActionChangeAlgorithmParams {
  /**
   * Type of the algorithm | Algorithm of the Load Balancer
   */
  type: 'least_connections' | 'round_robin';
}

export interface ActionChangeDNSPtrParams {
  /**
   * Hostname to set as a reverse DNS PTR entry
   */
  dns_ptr: string | null;

  /**
   * Public IP address for which the reverse DNS entry should be set
   */
  ip: string;
}

export interface ActionChangeProtectionParams {
  /**
   * If true, prevents the Load Balancer from being deleted
   */
  delete?: boolean;
}

export interface ActionChangeTypeParams {
  /**
   * ID or name of Load Balancer type the Load Balancer should migrate to
   */
  load_balancer_type: string;
}

export interface ActionDeleteServiceParams {
  /**
   * The listen port of the service you want to delete
   */
  listen_port: number;
}

export interface ActionDetachFromNetworkParams {
  /**
   * ID of an existing network to detach the Load Balancer from
   */
  network: number;
}

export interface ActionRemoveTargetParams {
  /**
   * Type of the resource
   */
  type: 'ip' | 'label_selector' | 'server';

  /**
   * IP targets where the traffic should be routed to. It is only possible to use the
   * (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project
   * owner. IPs belonging to other users are blocked. Additionally IPs belonging to
   * services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as
   * well. Only present for target type "ip".
   */
  ip?: LoadBalancers.LoadBalancerTargetIP;

  /**
   * Configuration for type LabelSelector, required if type is `label_selector`
   */
  label_selector?: ActionRemoveTargetParams.LabelSelector;

  /**
   * Configuration for type Server, required if type is `server`
   */
  server?: ActionRemoveTargetParams.Server;
}

export namespace ActionRemoveTargetParams {
  /**
   * Configuration for type LabelSelector, required if type is `label_selector`
   */
  export interface LabelSelector {
    /**
     * Label selector
     */
    selector: string;
  }

  /**
   * Configuration for type Server, required if type is `server`
   */
  export interface Server {
    /**
     * ID of the Server
     */
    id: number;
  }
}

export interface ActionUpdateServiceParams {
  /**
   * Port the Load Balancer will balance to
   */
  destination_port: number;

  /**
   * Service health check
   */
  health_check: ActionUpdateServiceParams.HealthCheck;

  /**
   * Port the Load Balancer listens on
   */
  listen_port: number;

  /**
   * Protocol of the Load Balancer
   */
  protocol: 'http' | 'https' | 'tcp';

  /**
   * Is Proxyprotocol enabled or not
   */
  proxyprotocol: boolean;

  /**
   * Configuration option for protocols http and https
   */
  http?: ActionUpdateServiceParams.HTTP;
}

export namespace ActionUpdateServiceParams {
  /**
   * Service health check
   */
  export interface HealthCheck {
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
    protocol: 'http' | 'tcp';

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
    http?: HealthCheck.HTTP;
  }

  export namespace HealthCheck {
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
  export interface HTTP {
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
}

export namespace Actions {
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionAddServiceResponse = API.ActionAddServiceResponse;
  export import ActionAssTargetResponse = API.ActionAssTargetResponse;
  export import ActionAttachToNetworkResponse = API.ActionAttachToNetworkResponse;
  export import ActionChangeAlgorithmResponse = API.ActionChangeAlgorithmResponse;
  export import ActionChangeDNSPtrResponse = API.ActionChangeDNSPtrResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionChangeTypeResponse = API.ActionChangeTypeResponse;
  export import ActionDeleteServiceResponse = API.ActionDeleteServiceResponse;
  export import ActionDetachFromNetworkResponse = API.ActionDetachFromNetworkResponse;
  export import ActionDisablePublicInterfaceResponse = API.ActionDisablePublicInterfaceResponse;
  export import ActionEnablePublicInterfaceResponse = API.ActionEnablePublicInterfaceResponse;
  export import ActionRemoveTargetResponse = API.ActionRemoveTargetResponse;
  export import ActionUpdateServiceResponse = API.ActionUpdateServiceResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAddServiceParams = API.ActionAddServiceParams;
  export import ActionAssTargetParams = API.ActionAssTargetParams;
  export import ActionAttachToNetworkParams = API.ActionAttachToNetworkParams;
  export import ActionChangeAlgorithmParams = API.ActionChangeAlgorithmParams;
  export import ActionChangeDNSPtrParams = API.ActionChangeDNSPtrParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
  export import ActionChangeTypeParams = API.ActionChangeTypeParams;
  export import ActionDeleteServiceParams = API.ActionDeleteServiceParams;
  export import ActionDetachFromNetworkParams = API.ActionDetachFromNetworkParams;
  export import ActionRemoveTargetParams = API.ActionRemoveTargetParams;
  export import ActionUpdateServiceParams = API.ActionUpdateServiceParams;
}
