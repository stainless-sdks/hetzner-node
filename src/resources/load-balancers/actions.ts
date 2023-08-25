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
  ): Core.APIPromise<Shared.ActionResponse> {
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
  ): Core.APIPromise<Shared.ActionResponse> {
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
  ): Core.APIPromise<Shared.ActionResponse> {
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
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/load_balancers/${id}/actions/attach_to_network`, { body, ...options });
  }

  /**
   * Change the algorithm that determines to which target new requests are sent.
   */
  changeAlgorithm(
    id: number,
    body: ActionChangeAlgorithmParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/load_balancers/${id}/actions/change_algorithm`, { body, ...options });
  }

  /**
   * Changes the hostname that will appear when getting the hostname belonging to the
   * public IPs (IPv4 and IPv6) of this Load Balancer.
   *
   * Floating IPs assigned to the Server are not affected by this.
   */
  changeDnsPtr(
    id: number,
    body: ActionChangeDnsPtrParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/load_balancers/${id}/actions/change_dns_ptr`, { body, ...options });
  }

  /**
   * Changes the protection configuration of a Load Balancer.
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
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/load_balancers/${id}/actions/change_type`, { body, ...options });
  }

  /**
   * Delete a service of a Load Balancer.
   */
  deleteService(
    id: number,
    body: ActionDeleteServiceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/load_balancers/${id}/actions/delete_service`, { body, ...options });
  }

  /**
   * Detaches a Load Balancer from a network.
   */
  detachFromNetwork(
    id: number,
    body: ActionDetachFromNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
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
  disablePublicInterface(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/load_balancers/${id}/actions/disable_public_interface`, options);
  }

  /**
   * Enable the public interface of a Load Balancer. The Load Balancer will be
   * accessible from the internet via its public IPs.
   */
  enablePublicInterface(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/load_balancers/${id}/actions/enable_public_interface`, options);
  }

  /**
   * Removes a target from a Load Balancer.
   */
  removeTarget(
    id: number,
    body: ActionRemoveTargetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
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
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/load_balancers/${id}/actions/update_service`, { body, ...options });
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

export interface ActionAddServiceParams {
  /**
   * Port the Load Balancer will balance to
   */
  destination_port: number;

  /**
   * Service health check
   */
  health_check: LoadBalancers.LoadBalancerServiceHealthCheck;

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
  http?: LoadBalancers.LoadBalancerServiceHTTP;
}

export interface ActionAssTargetParams {
  /**
   * Type of the resource
   */
  type: 'server' | 'label_selector' | 'ip';

  /**
   * IP targets where the traffic should be routed to. It is only possible to use the
   * (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project
   * owner. IPs belonging to other users are blocked. Additionally IPs belonging to
   * services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as
   * well. Only present for target type "ip".
   */
  ip?: LoadBalancers.LoadBalancerTargetIp;

  /**
   * Configuration for label selector targets, required if type is `label_selector`
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
   * Configuration for label selector targets, required if type is `label_selector`
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
   * Algorithm of the Load Balancer
   */
  type: 'round_robin' | 'least_connections';
}

export interface ActionChangeDnsPtrParams {
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
  type: 'server' | 'label_selector' | 'ip';

  /**
   * IP targets where the traffic should be routed to. It is only possible to use the
   * (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project
   * owner. IPs belonging to other users are blocked. Additionally IPs belonging to
   * services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as
   * well. Only present for target type "ip".
   */
  ip?: LoadBalancers.LoadBalancerTargetIp;

  /**
   * Configuration for label selector targets, required if type is `label_selector`
   */
  label_selector?: ActionRemoveTargetParams.LabelSelector;

  /**
   * Configuration for type Server, required if type is `server`
   */
  server?: ActionRemoveTargetParams.Server;
}

export namespace ActionRemoveTargetParams {
  /**
   * Configuration for label selector targets, required if type is `label_selector`
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
  health_check: LoadBalancers.LoadBalancerServiceHealthCheck;

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
  http?: LoadBalancers.LoadBalancerServiceHTTP;
}

export namespace Actions {
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
}
