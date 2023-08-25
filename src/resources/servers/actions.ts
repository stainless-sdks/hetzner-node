// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Actions extends APIResource {
  /**
   * Returns a specific Action object for a Server.
   */
  retrieve(
    id: number,
    actionId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.get(`/servers/${id}/actions/${actionId}`, options);
  }

  /**
   * Returns all Action objects for a Server. You can `sort` the results by using the
   * sort URI parameter, and filter them with the `status` parameter.
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
    return this.get(`/servers/${id}/actions`, { query, ...options });
  }

  /**
   * Adds a Server to a Placement Group.
   *
   * Server must be powered off for this command to succeed.
   *
   * #### Call specific error codes
   *
   * | Code                 | Description                          |
   * | -------------------- | ------------------------------------ |
   * | `server_not_stopped` | The action requires a stopped server |
   */
  addToPlacementGroup(
    id: number,
    body: ActionAddToPlacementGroupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/add_to_placement_group`, { body, ...options });
  }

  /**
   * Attaches an ISO to a Server. The Server will immediately see it as a new disk.
   * An already attached ISO will automatically be detached before the new ISO is
   * attached.
   *
   * Servers with attached ISOs have a modified boot order: They will try to boot
   * from the ISO first before falling back to hard disk.
   */
  attachIso(
    id: number,
    body: ActionAttachIsoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/attach_iso`, { body, ...options });
  }

  /**
   * Attaches a Server to a network. This will complement the fixed public Server
   * interface by adding an additional ethernet interface to the Server which is
   * connected to the specified network.
   *
   * The Server will get an IP auto assigned from a subnet of type `server` in the
   * same `network_zone`.
   *
   * Using the `alias_ips` attribute you can also define one or more additional IPs
   * to the Servers. Please note that you will have to configure these IPs by hand on
   * your Server since only the primary IP will be given out by DHCP.
   *
   * **Call specific error codes**
   *
   * | Code                      | Description                                                    |
   * | ------------------------- | -------------------------------------------------------------- |
   * | `server_already_attached` | The server is already attached to the network                  |
   * | `ip_not_available`        | The provided Network IP is not available                       |
   * | `no_subnet_available`     | No Subnet or IP is available for the Server within the network |
   * | `networks_overlap`        | The network IP range overlaps with one of the server networks  |
   */
  attachToNetwork(
    id: number,
    body: ActionAttachToNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/attach_to_network`, { body, ...options });
  }

  /**
   * Changes the alias IPs of an already attached Network. Note that the existing
   * aliases for the specified Network will be replaced with these provided in the
   * request body. So if you want to add an alias IP, you have to provide the
   * existing ones from the Network plus the new alias IP in the request body.
   */
  changeAliasIps(
    id: number,
    body: ActionChangeAliasIpsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/change_alias_ips`, { body, ...options });
  }

  /**
   * Changes the hostname that will appear when getting the hostname belonging to the
   * primary IPs (IPv4 and IPv6) of this Server.
   *
   * Floating IPs assigned to the Server are not affected by this.
   */
  changeDnsPtr(
    id: number,
    body: ActionChangeDnsPtrParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/change_dns_ptr`, { body, ...options });
  }

  /**
   * Changes the protection configuration of the Server.
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
    return this.post(`/servers/${id}/actions/change_protection`, { body, ...options });
  }

  /**
   * Changes the type (Cores, RAM and disk sizes) of a Server.
   *
   * Server must be powered off for this command to succeed.
   *
   * This copies the content of its disk, and starts it again.
   *
   * You can only migrate to Server types with the same `storage_type` and equal or
   * bigger disks. Shrinking disks is not possible as it might destroy data.
   *
   * If the disk gets upgraded, the Server type can not be downgraded any more. If
   * you plan to downgrade the Server type, set `upgrade_disk` to `false`.
   *
   * #### Call specific error codes
   *
   * | Code                  | Description                                                        |
   * | --------------------- | ------------------------------------------------------------------ |
   * | `invalid_server_type` | The server type does not fit for the given server or is deprecated |
   * | `server_not_stopped`  | The action requires a stopped server                               |
   */
  changeType(
    id: number,
    body: ActionChangeTypeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/change_type`, { body, ...options });
  }

  /**
   * Creates an Image (snapshot) from a Server by copying the contents of its disks.
   * This creates a snapshot of the current state of the disk and copies it into an
   * Image. If the Server is currently running you must make sure that its disk
   * content is consistent. Otherwise, the created Image may not be readable.
   *
   * To make sure disk content is consistent, we recommend to shut down the Server
   * prior to creating an Image.
   *
   * You can either create a `backup` Image that is bound to the Server and therefore
   * will be deleted when the Server is deleted, or you can create an `snapshot`
   * Image which is completely independent of the Server it was created from and will
   * survive Server deletion. Backup Images are only available when the backup option
   * is enabled for the Server. Snapshot Images are billed on a per GB basis.
   */
  createImage(
    id: number,
    body?: ActionCreateImageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionCreateImageResponse>;
  createImage(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionCreateImageResponse>;
  createImage(
    id: number,
    body: ActionCreateImageParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionCreateImageResponse> {
    if (isRequestOptions(body)) {
      return this.createImage(id, {}, body);
    }
    return this.post(`/servers/${id}/actions/create_image`, { body, ...options });
  }

  /**
   * Detaches a Server from a network. The interface for this network will vanish.
   */
  detachFromNetwork(
    id: number,
    body: ActionDetachFromNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/detach_from_network`, { body, ...options });
  }

  /**
   * Detaches an ISO from a Server. In case no ISO Image is attached to the Server,
   * the status of the returned Action is immediately set to `success`
   */
  detachIso(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/detach_iso`, options);
  }

  /**
   * Disables the automatic backup option and deletes all existing Backups for a
   * Server. No more additional charges for backups will be made.
   *
   * Caution: This immediately removes all existing backups for the Server!
   */
  disableBackup(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/disable_backup`, options);
  }

  /**
   * Disables the Hetzner Rescue System for a Server. This makes a Server start from
   * its disks on next reboot.
   *
   * Rescue Mode is automatically disabled when you first boot into it or if you do
   * not use it for 60 minutes.
   *
   * Disabling rescue mode will not reboot your Server — you will have to do this
   * yourself.
   */
  disableRescue(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/disable_rescue`, options);
  }

  /**
   * Enables and configures the automatic daily backup option for the Server.
   * Enabling automatic backups will increase the price of the Server by 20%. In
   * return, you will get seven slots where Images of type backup can be stored.
   *
   * Backups are automatically created daily.
   */
  enableBackup(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/enable_backup`, options);
  }

  /**
   * Enable the Hetzner Rescue System for this Server. The next time a Server with
   * enabled rescue mode boots it will start a special minimal Linux distribution
   * designed for repair and reinstall.
   *
   * In case a Server cannot boot on its own you can use this to access a Server’s
   * disks.
   *
   * Rescue Mode is automatically disabled when you first boot into it or if you do
   * not use it for 60 minutes.
   *
   * Enabling rescue mode will not
   * [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your
   * Server — you will have to do this yourself.
   */
  enableRescue(
    id: number,
    body?: ActionEnableRescueParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionEnableRescueResponse>;
  enableRescue(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionEnableRescueResponse>;
  enableRescue(
    id: number,
    body: ActionEnableRescueParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionEnableRescueResponse> {
    if (isRequestOptions(body)) {
      return this.enableRescue(id, {}, body);
    }
    return this.post(`/servers/${id}/actions/enable_rescue`, { body, ...options });
  }

  /**
   * Cuts power to the Server. This forcefully stops it without giving the Server
   * operating system time to gracefully stop. May lead to data loss, equivalent to
   * pulling the power cord. Power off should only be used when shutdown does not
   * work.
   */
  poweroff(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/poweroff`, options);
  }

  /**
   * Starts a Server by turning its power on.
   */
  poweron(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/poweron`, options);
  }

  /**
   * Reboots a Server gracefully by sending an ACPI request. The Server operating
   * system must support ACPI and react to the request, otherwise the Server will not
   * reboot.
   */
  reboot(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/reboot`, options);
  }

  /**
   * Rebuilds a Server overwriting its disk with the content of an Image, thereby
   * **destroying all data** on the target Server
   *
   * The Image can either be one you have created earlier (`backup` or `snapshot`
   * Image) or it can be a completely fresh `system` Image provided by us. You can
   * get a list of all available Images with `GET /images`.
   *
   * Your Server will automatically be powered off before the rebuild command
   * executes.
   */
  rebuild(
    id: number,
    body: ActionRebuildParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRebuildResponse> {
    return this.post(`/servers/${id}/actions/rebuild`, { body, ...options });
  }

  /**
   * Removes a Server from a Placement Group.
   */
  removeFromPlacementGroup(
    id: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/remove_from_placement_group`, options);
  }

  /**
   * Requests credentials for remote access via VNC over websocket to keyboard,
   * monitor, and mouse for a Server. The provided URL is valid for 1 minute, after
   * this period a new url needs to be created to connect to the Server. How long the
   * connection is open after the initial connect is not subject to this timeout.
   */
  requestConsole(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionRequestConsoleResponse> {
    return this.post(`/servers/${id}/actions/request_console`, options);
  }

  /**
   * Cuts power to a Server and starts it again. This forcefully stops it without
   * giving the Server operating system time to gracefully stop. This may lead to
   * data loss, it’s equivalent to pulling the power cord and plugging it in again.
   * Reset should only be used when reboot does not work.
   */
  reset(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/reset`, options);
  }

  /**
   * Resets the root password. Only works for Linux systems that are running the qemu
   * guest agent. Server must be powered on (status `running`) in order for this
   * operation to succeed.
   *
   * This will generate a new password for this Server and return it.
   *
   * If this does not succeed you can use the rescue system to netboot the Server and
   * manually change your Server password by hand.
   */
  resetPassword(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionResetPasswordResponse> {
    return this.post(`/servers/${id}/actions/reset_password`, options);
  }

  /**
   * Shuts down a Server gracefully by sending an ACPI shutdown request. The Server
   * operating system must support ACPI and react to the request, otherwise the
   * Server will not shut down. Please note that the `action` status in this case
   * only reflects whether the action was sent to the server. It does not mean that
   * the server actually shut down successfully. If you need to ensure that the
   * server is off, use the `poweroff` action
   */
  shutdown(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.ActionResponse> {
    return this.post(`/servers/${id}/actions/shutdown`, options);
  }
}

export interface ActionCreateImageResponse {
  action?: Shared.Action;

  image?: ActionCreateImageResponse.Image;
}

export namespace ActionCreateImageResponse {
  export interface Image {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Type of cpu architecture this image is compatible with.
     */
    architecture: 'x86' | 'arm';

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
    os_flavor: 'ubuntu' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'alma' | 'unknown';

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
    type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary';

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
       * If true, prevents the Resource from being deleted
       */
      delete: boolean;
    }
  }
}

export interface ActionEnableRescueResponse {
  action?: Shared.Action;

  /**
   * Password that will be set for this Server once the Action succeeds
   */
  root_password?: string;
}

export interface ActionRebuildResponse {
  action?: Shared.Action;

  /**
   * New root password when not using SSH keys
   */
  root_password?: string | null;
}

export interface ActionRequestConsoleResponse {
  action: Shared.Action;

  /**
   * VNC password to use for this connection (this password only works in combination
   * with a wss_url with valid token)
   */
  password: string;

  /**
   * URL of websocket proxy to use; this includes a token which is valid for a
   * limited time only
   */
  wss_url: string;
}

export interface ActionResetPasswordResponse {
  action?: Shared.Action;

  /**
   * Password that will be set for this Server once the Action succeeds
   */
  root_password?: string;
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

export interface ActionAddToPlacementGroupParams {
  /**
   * ID of Placement Group the Server should be added to
   */
  placement_group: number;
}

export interface ActionAttachIsoParams {
  /**
   * ID or name of ISO to attach to the Server as listed in GET `/isos`
   */
  iso: string;
}

export interface ActionAttachToNetworkParams {
  /**
   * ID of an existing network to attach the Server to
   */
  network: number;

  /**
   * Additional IPs to be assigned to this Server
   */
  alias_ips?: Array<string>;

  /**
   * IP to request to be assigned to this Server; if you do not provide this then you
   * will be auto assigned an IP address
   */
  ip?: string;
}

export interface ActionChangeAliasIpsParams {
  /**
   * New alias IPs to set for this Server
   */
  alias_ips: Array<string>;

  /**
   * ID of an existing Network already attached to the Server
   */
  network: number;
}

export interface ActionChangeDnsPtrParams {
  /**
   * Hostname to set as a reverse DNS PTR entry, reset to original value if `null`
   */
  dns_ptr: string | null;

  /**
   * Primary IP address for which the reverse DNS entry should be set
   */
  ip: string;
}

export interface ActionChangeProtectionParams {
  /**
   * If true, prevents the Server from being deleted (currently delete and rebuild
   * attribute needs to have the same value)
   */
  delete?: boolean;

  /**
   * If true, prevents the Server from being rebuilt (currently delete and rebuild
   * attribute needs to have the same value)
   */
  rebuild?: boolean;
}

export interface ActionChangeTypeParams {
  /**
   * ID or name of Server type the Server should migrate to
   */
  server_type: string;

  /**
   * If false, do not upgrade the disk (this allows downgrading the Server type
   * later)
   */
  upgrade_disk: boolean;
}

export interface ActionCreateImageParams {
  /**
   * Description of the Image, will be auto-generated if not set
   */
  description?: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: ActionCreateImageParams.Labels;

  /**
   * Type of Image to create (default: `snapshot`)
   */
  type?: 'snapshot' | 'backup';
}

export namespace ActionCreateImageParams {
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

export interface ActionDetachFromNetworkParams {
  /**
   * ID of an existing network to detach the Server from
   */
  network: number;
}

export interface ActionEnableRescueParams {
  /**
   * Array of SSH key IDs which should be injected into the rescue system.
   */
  ssh_keys?: Array<number>;

  /**
   * Type of rescue system to boot (default: `linux64`)
   */
  type?: 'linux64' | 'linux32';
}

export interface ActionRebuildParams {
  /**
   * ID or name of Image to rebuilt from.
   */
  image: string;
}

export namespace Actions {
  export import ActionCreateImageResponse = API.ActionCreateImageResponse;
  export import ActionEnableRescueResponse = API.ActionEnableRescueResponse;
  export import ActionRebuildResponse = API.ActionRebuildResponse;
  export import ActionRequestConsoleResponse = API.ActionRequestConsoleResponse;
  export import ActionResetPasswordResponse = API.ActionResetPasswordResponse;
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
}
