// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as ServerTypes from 'hetzner/resources/server-types';
import * as Pricing from 'hetzner/resources/pricing';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import { Metrics } from './metrics';
import * as API from './index';
import { ServersPage, ServersPageParams } from 'hetzner/pagination';

export class Servers extends APIResource {
  actions: Actions = new Actions(this.client);
  metrics: Metrics = new Metrics(this.client);

  /**
   * Creates a new Server. Returns preliminary information about the Server as well
   * as an Action that covers progress of creation.
   */
  create(body: ServerCreateParams, options?: Core.RequestOptions): Core.APIPromise<ServerCreateResponse> {
    return this.post('/servers', { body, ...options });
  }

  /**
   * Returns a specific Server object. The Server must exist inside the Project
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<ServerRetrieveResponse> {
    return this.get(`/servers/${id}`, options);
  }

  /**
   * Updates a Server. You can update a Server’s name and a Server’s labels. Please
   * note that Server names must be unique per Project and valid hostnames as per RFC
   * 1123 (i.e. may only contain letters, digits, periods, and dashes). Also note
   * that when updating labels, the Server’s current set of labels will be replaced
   * with the labels provided in the request body. So, for example, if you want to
   * add a new label, you have to provide all existing labels plus the new label in
   * the request body.
   */
  update(
    id: number,
    body?: ServerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<ServerUpdateResponse>;
  update(
    id: number,
    body: ServerUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/servers/${id}`, { body, ...options });
  }

  /**
   * Returns all existing Server objects
   */
  list(query?: ServerListParams, options?: Core.RequestOptions): Core.PagePromise<ServersServersPage, Server>;
  list(options?: Core.RequestOptions): Core.PagePromise<ServersServersPage, Server>;
  list(
    query: ServerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ServersServersPage, Server> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/servers', ServersServersPage, { query, ...options });
  }

  /**
   * Deletes a Server. This immediately removes the Server from your account, and it
   * is no longer accessible.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<ServerDeleteResponse> {
    return this.delete(`/servers/${id}`, options);
  }
}

export class ServersServersPage extends ServersPage<Server> {}
// alias so we can export it in the namespace
type _ServersServersPage = ServersServersPage;

/**
 * Servers are virtual machines that can be provisioned.
 */
export interface Server {
  /**
   * ID of the Resource
   */
  id: number;

  /**
   * Time window (UTC) in which the backup will run, or null if the backups are not
   * enabled
   */
  backup_window: string | null;

  /**
   * Point in time when the Resource was created (in ISO-8601 format)
   */
  created: string;

  /**
   * Datacenter this Primary IP is located at | Datacenter this Resource is located
   * at
   */
  datacenter: Server.Datacenter;

  image: Server.Image | null;

  /**
   * Free Traffic for the current billing period in bytes
   */
  included_traffic: number | null;

  /**
   * Inbound Traffic for the current billing period in bytes
   */
  ingoing_traffic: number | null;

  /**
   * ISO Image that is attached to this Server. Null if no ISO is attached.
   */
  iso: Server.Iso | null;

  /**
   * User-defined labels (key-value pairs)
   */
  labels: Record<string, string>;

  /**
   * True if Server has been locked and is not available to user
   */
  locked: boolean;

  /**
   * Name of the Server (must be unique per Project and a valid hostname as per
   * RFC 1123)
   */
  name: string;

  /**
   * Outbound Traffic for the current billing period in bytes
   */
  outgoing_traffic: number | null;

  /**
   * Size of the primary Disk
   */
  primary_disk_size: number;

  /**
   * Private networks information
   */
  private_net: Array<Server.PrivateNet>;

  /**
   * Protection configuration for the Server
   */
  protection: Server.Protection;

  /**
   * Public network information. The Server's IPv4 address can be found in
   * `public_net->ipv4->ip`
   */
  public_net: ServerPublicNet;

  /**
   * True if rescue mode is enabled. Server will then boot into rescue system on next
   * reboot
   */
  rescue_enabled: boolean;

  /**
   * Type of Server - determines how much ram, disk and cpu a Server has
   */
  server_type: Server.ServerType;

  /**
   * Status of the Server
   */
  status:
    | 'deleting'
    | 'initializing'
    | 'migrating'
    | 'off'
    | 'rebuilding'
    | 'running'
    | 'starting'
    | 'stopping'
    | 'unknown';

  load_balancers?: Array<number>;

  placement_group?: Server.PlacementGroup | null;

  /**
   * IDs of Volumes assigned to this Server
   */
  volumes?: Array<number>;
}

export namespace Server {
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

  export interface Image {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Type of cpu architecture this image is compatible with. | Type of cpu
     * architecture
     */
    architecture: 'arm' | 'x86';

    /**
     * ID of Server the Image is bound to. Only set for Images of type `backup`.
     */
    bound_to: number | null;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Information about the Server the Image was created from
     */
    created_from: Image.CreatedFrom | null;

    /**
     * Point in time where the Image was deleted (in ISO-8601 format)
     */
    deleted: string | null;

    /**
     * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
     */
    deprecated: string | null;

    /**
     * Description of the Image
     */
    description: string;

    /**
     * Size of the disk contained in the Image in GB
     */
    disk_size: number;

    /**
     * Size of the Image file in our storage in GB. For snapshot Images this is the
     * value relevant for calculating costs for the Image.
     */
    image_size: number | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Unique identifier of the Image. This value is only set for system Images.
     */
    name: string | null;

    /**
     * Flavor of operating system contained in the Image
     */
    os_flavor: 'alma' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'ubuntu' | 'unknown';

    /**
     * Operating system version
     */
    os_version: string | null;

    /**
     * Protection configuration for the Resource
     */
    protection: Image.Protection;

    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: 'available' | 'creating' | 'unavailable';

    /**
     * Type of the Image
     */
    type: 'app' | 'backup' | 'snapshot' | 'system' | 'temporary';

    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapid_deploy?: boolean;
  }

  export namespace Image {
    /**
     * Information about the Server the Image was created from
     */
    export interface CreatedFrom {
      /**
       * ID of the Server the Image was created from
       */
      id: number;

      /**
       * Server name at the time the Image was created
       */
      name: string;
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

  /**
   * ISO Image that is attached to this Server. Null if no ISO is attached.
   */
  export interface Iso {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Type of cpu architecture this iso is compatible with. Null indicates no
     * restriction on the architecture (wildcard).
     */
    architecture: 'arm' | 'x86' | null;

    /**
     * ISO 8601 timestamp of deprecation, null if ISO is still available. After the
     * deprecation time it will no longer be possible to attach the ISO to Servers.
     */
    deprecated: string | null;

    /**
     * Description of the ISO
     */
    description: string;

    /**
     * Unique identifier of the ISO. Only set for public ISOs
     */
    name: string | null;

    /**
     * Type of the ISO
     */
    type: 'private' | 'public';
  }

  export interface PrivateNet {
    alias_ips?: Array<string>;

    ip?: string;

    mac_address?: string;

    /**
     * ID of the Network
     */
    network?: number;
  }

  /**
   * Protection configuration for the Server
   */
  export interface Protection {
    /**
     * If true, prevents the Server from being deleted
     */
    delete: boolean;

    /**
     * If true, prevents the Server from being rebuilt
     */
    rebuild: boolean;
  }

  /**
   * Type of Server - determines how much ram, disk and cpu a Server has
   */
  export interface ServerType {
    /**
     * ID of the Server type
     */
    id: number;

    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;

    /**
     * Type of cpu
     */
    cpu_type: ServerTypes.CpuType;

    /**
     * True if Server type is deprecated
     */
    deprecated: boolean | null;

    /**
     * Description of the Server type
     */
    description: string;

    /**
     * Disk size a Server of this type will have in GB
     */
    disk: number;

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
      price_hourly: Pricing.Price;

      /**
       * Hourly costs for a Resource in this Location | Monthly costs for a Resource in
       * this Location | Monthly costs for a Floating IP type in this Location | Hourly
       * costs for a Load Balancer type in this network zone | Monthly costs for a Load
       * Balancer type in this network zone | Hourly costs for a Primary IP type in this
       * Location | Monthly costs for a Primary IP type in this Location | Hourly costs
       * for a Server type in this Location | Monthly costs for a Server type in this
       * Location
       */
      price_monthly: Pricing.Price;
    }
  }

  export interface PlacementGroup {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Array of IDs of Servers that are part of this Placement Group
     */
    servers: Array<number>;

    /**
     * Type of the Placement Group
     */
    type: 'spread';
  }
}

/**
 * Public network information. The Server's IPv4 address can be found in
 * `public_net->ipv4->ip`
 */
export interface ServerPublicNet {
  /**
   * IDs of Floating IPs assigned to this Server
   */
  floating_ips: Array<number>;

  /**
   * IP address (v4) and its reverse DNS entry of this Server
   */
  ipv4: ServerPublicNet.Ipv4 | null;

  /**
   * IPv6 network assigned to this Server and its reverse DNS entry
   */
  ipv6: ServerPublicNet.Ipv6 | null;

  /**
   * Firewalls applied to the public network interface of this Server
   */
  firewalls?: Array<ServerPublicNet.Firewall>;
}

export namespace ServerPublicNet {
  /**
   * IP address (v4) and its reverse DNS entry of this Server
   */
  export interface Ipv4 {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean;

    /**
     * Reverse DNS PTR entry for the IPv4 addresses of this Server
     */
    dns_ptr: string;

    /**
     * IP address (v4) of this Server
     */
    ip: string;

    /**
     * ID of the Resource
     */
    id?: number;
  }

  /**
   * IPv6 network assigned to this Server and its reverse DNS entry
   */
  export interface Ipv6 {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean;

    /**
     * Reverse DNS PTR entries for the IPv6 addresses of this Server, `null` by default
     */
    dns_ptr: Array<Ipv6.DnsPtr> | null;

    /**
     * IP address (v6) of this Server
     */
    ip: string;

    /**
     * ID of the Resource
     */
    id?: number;
  }

  export namespace Ipv6 {
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
  }

  export interface Firewall {
    /**
     * ID of the Resource
     */
    id?: number;

    /**
     * Status of the Firewall on the Server
     */
    status?: 'applied' | 'pending';
  }
}

/**
 * Response to POST https://api.hetzner.cloud/v1/servers
 */
export interface ServerCreateResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;

  next_actions: Array<Shared.Action>;

  /**
   * Root password when no SSH keys have been specified
   */
  root_password: string | null;

  /**
   * Servers are virtual machines that can be provisioned.
   */
  server: Server;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/servers/{id}
 */
export interface ServerRetrieveResponse {
  /**
   * Servers are virtual machines that can be provisioned.
   */
  server?: Server;
}

/**
 * Response to PUT https://api.hetzner.cloud/v1/servers/{id}
 */
export interface ServerUpdateResponse {
  /**
   * Servers are virtual machines that can be provisioned.
   */
  server?: Server;
}

/**
 * Response to DELETE https://api.hetzner.cloud/v1/servers/{id}
 */
export interface ServerDeleteResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action?: Shared.Action;
}

export interface ServerCreateParams {
  /**
   * ID or name of the Image the Server is created from
   */
  image: string;

  /**
   * Name of the Server to create (must be unique per Project and a valid hostname as
   * per RFC 1123)
   */
  name: string;

  /**
   * ID or name of the Server type this Server should be created with
   */
  server_type: string;

  /**
   * Auto-mount Volumes after attach
   */
  automount?: boolean;

  /**
   * ID or name of Datacenter to create Server in (must not be used together with
   * location)
   */
  datacenter?: string;

  /**
   * Firewalls which should be applied on the Server's public network interface at
   * creation time
   */
  firewalls?: Array<ServerCreateParams.Firewall>;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * ID or name of Location to create Server in (must not be used together with
   * datacenter)
   */
  location?: string;

  /**
   * Network IDs which should be attached to the Server private network interface at
   * the creation time
   */
  networks?: Array<number>;

  /**
   * ID of the Placement Group the server should be in
   */
  placement_group?: number;

  /**
   * Public Network options
   */
  public_net?: ServerCreateParams.PublicNet;

  /**
   * SSH key IDs (`integer`) or names (`string`) which should be injected into the
   * Server at creation time
   */
  ssh_keys?: Array<string>;

  /**
   * Start Server right after creation. Defaults to true.
   */
  start_after_create?: boolean;

  /**
   * Cloud-Init user data to use during Server creation. This field is limited to
   * 32KiB.
   */
  user_data?: string;

  /**
   * Volume IDs which should be attached to the Server at the creation time. Volumes
   * must be in the same Location.
   */
  volumes?: Array<number>;
}

export namespace ServerCreateParams {
  export interface Firewall {
    /**
     * ID of the Firewall
     */
    firewall: number;
  }

  /**
   * Public Network options
   */
  export interface PublicNet {
    /**
     * Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached.
     * Defaults to true.
     */
    enable_ipv4?: boolean;

    /**
     * Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached.
     * Defaults to true.
     */
    enable_ipv6?: boolean;

    /**
     * ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4
     * Primary IP will automatically be created.
     */
    ipv4?: number | null;

    /**
     * ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6
     * Primary IP will automatically be created.
     */
    ipv6?: number | null;
  }
}

export interface ServerUpdateParams {
  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * New name to set
   */
  name?: string;
}

export interface ServerListParams extends ServersPageParams {
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

  /**
   * Can be used multiple times. The response will only contain Server matching the
   * status
   */
  status?:
    | 'initializing'
    | 'starting'
    | 'running'
    | 'stopping'
    | 'off'
    | 'deleting'
    | 'rebuilding'
    | 'migrating'
    | 'unknown';
}

export namespace Servers {
  export import Server = API.Server;
  export import ServerPublicNet = API.ServerPublicNet;
  export import ServerCreateResponse = API.ServerCreateResponse;
  export import ServerRetrieveResponse = API.ServerRetrieveResponse;
  export import ServerUpdateResponse = API.ServerUpdateResponse;
  export import ServerDeleteResponse = API.ServerDeleteResponse;
  export type ServersServersPage = _ServersServersPage;
  export import ServerCreateParams = API.ServerCreateParams;
  export import ServerUpdateParams = API.ServerUpdateParams;
  export import ServerListParams = API.ServerListParams;

  export import Actions = API.Actions;
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionAddToPlacementGroupResponse = API.ActionAddToPlacementGroupResponse;
  export import ActionAttachIsoResponse = API.ActionAttachIsoResponse;
  export import ActionAttachToNetworkResponse = API.ActionAttachToNetworkResponse;
  export import ActionChangeAliasIpsResponse = API.ActionChangeAliasIpsResponse;
  export import ActionChangeDnsPtrResponse = API.ActionChangeDnsPtrResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionChangeTypeResponse = API.ActionChangeTypeResponse;
  export import ActionCreateImageResponse = API.ActionCreateImageResponse;
  export import ActionDetachFromNetworkResponse = API.ActionDetachFromNetworkResponse;
  export import ActionDetachIsoResponse = API.ActionDetachIsoResponse;
  export import ActionDisableBackupResponse = API.ActionDisableBackupResponse;
  export import ActionDisableRescueResponse = API.ActionDisableRescueResponse;
  export import ActionEnableBackupResponse = API.ActionEnableBackupResponse;
  export import ActionEnableRescueResponse = API.ActionEnableRescueResponse;
  export import ActionPoweroffResponse = API.ActionPoweroffResponse;
  export import ActionPoweronResponse = API.ActionPoweronResponse;
  export import ActionRebootResponse = API.ActionRebootResponse;
  export import ActionRebuildResponse = API.ActionRebuildResponse;
  export import ActionRemoveFromPlacementGroupResponse = API.ActionRemoveFromPlacementGroupResponse;
  export import ActionRequestConsoleResponse = API.ActionRequestConsoleResponse;
  export import ActionResetResponse = API.ActionResetResponse;
  export import ActionResetPasswordResponse = API.ActionResetPasswordResponse;
  export import ActionShutdownResponse = API.ActionShutdownResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAddToPlacementGroupParams = API.ActionAddToPlacementGroupParams;
  export import ActionAttachIsoParams = API.ActionAttachIsoParams;
  export import ActionAttachToNetworkParams = API.ActionAttachToNetworkParams;
  export import ActionChangeAliasIpsParams = API.ActionChangeAliasIpsParams;
  export import ActionChangeDnsPtrParams = API.ActionChangeDnsPtrParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
  export import ActionChangeTypeParams = API.ActionChangeTypeParams;
  export import ActionCreateImageParams = API.ActionCreateImageParams;
  export import ActionDetachFromNetworkParams = API.ActionDetachFromNetworkParams;
  export import ActionEnableRescueParams = API.ActionEnableRescueParams;
  export import ActionRebuildParams = API.ActionRebuildParams;

  export import Metrics = API.Metrics;
  export import MetricListResponse = API.MetricListResponse;
  export import MetricListParams = API.MetricListParams;
}
