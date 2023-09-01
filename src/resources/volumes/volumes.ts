// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import * as API from './index';

export class Volumes extends APIResource {
  actions: Actions = new Actions(this.client);

  /**
   * Creates a new Volume attached to a Server. If you want to create a Volume that
   * is not attached to a Server, you need to provide the `location` key instead of
   * `server`. This can be either the ID or the name of the Location this Volume will
   * be created in. Note that a Volume can be attached to a Server only in the same
   * Location as the Volume itself.
   *
   * Specifying the Server during Volume creation will automatically attach the
   * Volume to that Server after it has been initialized. In that case, the
   * `next_actions` key in the response is an array which contains a single
   * `attach_volume` action.
   *
   * The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).
   *
   * A volume’s name can consist of alphanumeric characters, dashes, underscores, and
   * dots, but has to start and end with an alphanumeric character. The total length
   * is limited to 64 characters. Volume names must be unique per Project.
   *
   * #### Call specific error codes
   *
   * | Code                        | Description                                         |
   * | --------------------------- | --------------------------------------------------- |
   * | `no_space_left_in_location` | There is no volume space left in the given location |
   */
  create(body: VolumeCreateParams, options?: Core.RequestOptions): Core.APIPromise<VolumeCreateResponse> {
    return this.post('/volumes', { body, ...options });
  }

  /**
   * Gets a specific Volume object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<VolumeRetrieveResponse> {
    return this.get(`/volumes/${id}`, options);
  }

  /**
   * Updates the Volume properties.
   *
   * Note that when updating labels, the volume’s current set of labels will be
   * replaced with the labels provided in the request body. So, for example, if you
   * want to add a new label, you have to provide all existing labels plus the new
   * label in the request body.
   */
  update(
    id: number,
    body: VolumeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VolumeUpdateResponse> {
    return this.put(`/volumes/${id}`, { body, ...options });
  }

  /**
   * Gets all existing Volumes that you have available.
   */
  list(query?: VolumeListParams, options?: Core.RequestOptions): Core.APIPromise<VolumeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<VolumeListResponse>;
  list(
    query: VolumeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VolumeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/volumes', { query, ...options });
  }

  /**
   * Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not
   * be attached to a Server and it must not have delete protection enabled.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/volumes/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

/**
 * Response to POST https://api.hetzner.cloud/v1/volumes
 */
export interface VolumeCreateResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;

  next_actions: Array<Shared.Action>;

  /**
   * A Volume is a highly-available, scalable, and SSD-based block storage for
   * Servers. Pricing for Volumes depends on the Volume size and Location, not the
   * actual used storage. Please see
   * [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for
   * more details about Volumes.
   */
  volume: VolumeCreateResponse.Volume;
}

export namespace VolumeCreateResponse {
  /**
   * A Volume is a highly-available, scalable, and SSD-based block storage for
   * Servers. Pricing for Volumes depends on the Volume size and Location, not the
   * actual used storage. Please see
   * [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for
   * more details about Volumes.
   */
  export interface Volume {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Filesystem of the Volume if formatted on creation, null if not formatted on
     * creation
     */
    format: string | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Device path on the file system for the Volume
     */
    linux_device: string;

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    location: Volume.Location;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Protection configuration for the Resource
     */
    protection: Volume.Protection;

    /**
     * ID of the Server the Volume is attached to, null if it is not attached at all
     */
    server: number | null;

    /**
     * Size in GB of the Volume
     */
    size: number;

    /**
     * Current status of the Volume
     */
    status: 'available' | 'creating';
  }

  export namespace Volume {
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
}

/**
 * Response to GET https://api.hetzner.cloud/v1/volumes/{id}
 */
export interface VolumeRetrieveResponse {
  /**
   * A Volume is a highly-available, scalable, and SSD-based block storage for
   * Servers. Pricing for Volumes depends on the Volume size and Location, not the
   * actual used storage. Please see
   * [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for
   * more details about Volumes.
   */
  volume: VolumeRetrieveResponse.Volume;
}

export namespace VolumeRetrieveResponse {
  /**
   * A Volume is a highly-available, scalable, and SSD-based block storage for
   * Servers. Pricing for Volumes depends on the Volume size and Location, not the
   * actual used storage. Please see
   * [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for
   * more details about Volumes.
   */
  export interface Volume {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Filesystem of the Volume if formatted on creation, null if not formatted on
     * creation
     */
    format: string | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Device path on the file system for the Volume
     */
    linux_device: string;

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    location: Volume.Location;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Protection configuration for the Resource
     */
    protection: Volume.Protection;

    /**
     * ID of the Server the Volume is attached to, null if it is not attached at all
     */
    server: number | null;

    /**
     * Size in GB of the Volume
     */
    size: number;

    /**
     * Current status of the Volume
     */
    status: 'available' | 'creating';
  }

  export namespace Volume {
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
}

/**
 * Response to PUT https://api.hetzner.cloud/v1/volumes/{id}
 */
export interface VolumeUpdateResponse {
  /**
   * A Volume is a highly-available, scalable, and SSD-based block storage for
   * Servers. Pricing for Volumes depends on the Volume size and Location, not the
   * actual used storage. Please see
   * [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for
   * more details about Volumes.
   */
  volume: VolumeUpdateResponse.Volume;
}

export namespace VolumeUpdateResponse {
  /**
   * A Volume is a highly-available, scalable, and SSD-based block storage for
   * Servers. Pricing for Volumes depends on the Volume size and Location, not the
   * actual used storage. Please see
   * [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for
   * more details about Volumes.
   */
  export interface Volume {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Filesystem of the Volume if formatted on creation, null if not formatted on
     * creation
     */
    format: string | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Device path on the file system for the Volume
     */
    linux_device: string;

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    location: Volume.Location;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Protection configuration for the Resource
     */
    protection: Volume.Protection;

    /**
     * ID of the Server the Volume is attached to, null if it is not attached at all
     */
    server: number | null;

    /**
     * Size in GB of the Volume
     */
    size: number;

    /**
     * Current status of the Volume
     */
    status: 'available' | 'creating';
  }

  export namespace Volume {
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
}

/**
 * Response to GET https://api.hetzner.cloud/v1/volumes
 */
export interface VolumeListResponse {
  volumes: Array<VolumeListResponse.Volume>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

export namespace VolumeListResponse {
  /**
   * A Volume is a highly-available, scalable, and SSD-based block storage for
   * Servers. Pricing for Volumes depends on the Volume size and Location, not the
   * actual used storage. Please see
   * [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for
   * more details about Volumes.
   */
  export interface Volume {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Filesystem of the Volume if formatted on creation, null if not formatted on
     * creation
     */
    format: string | null;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Device path on the file system for the Volume
     */
    linux_device: string;

    /**
     * Location the Floating IP was created in. Routing is optimized for this Location.
     * | Location of the Volume. Volume can only be attached to Servers in the same
     * Location.
     */
    location: Volume.Location;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Protection configuration for the Resource
     */
    protection: Volume.Protection;

    /**
     * ID of the Server the Volume is attached to, null if it is not attached at all
     */
    server: number | null;

    /**
     * Size in GB of the Volume
     */
    size: number;

    /**
     * Current status of the Volume
     */
    status: 'available' | 'creating';
  }

  export namespace Volume {
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
}

export interface VolumeCreateParams {
  /**
   * Name of the volume
   */
  name: string;

  /**
   * Size of the Volume in GB
   */
  size: number;

  /**
   * Auto-mount Volume after attach. `server` must be provided.
   */
  automount?: boolean;

  /**
   * Format Volume after creation. One of: `xfs`, `ext4`
   */
  format?: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * Location to create the Volume in (can be omitted if Server is specified)
   */
  location?: string;

  /**
   * Server to which to attach the Volume once it's created (Volume will be created
   * in the same Location as the server)
   */
  server?: number;
}

export interface VolumeUpdateParams {
  /**
   * New Volume name
   */
  name: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;
}

export interface VolumeListParams {
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
   * Can be used multiple times. The response will only contain Volumes matching the
   * status.
   */
  status?: 'available' | 'creating';
}

export namespace Volumes {
  export import VolumeCreateResponse = API.VolumeCreateResponse;
  export import VolumeRetrieveResponse = API.VolumeRetrieveResponse;
  export import VolumeUpdateResponse = API.VolumeUpdateResponse;
  export import VolumeListResponse = API.VolumeListResponse;
  export import VolumeCreateParams = API.VolumeCreateParams;
  export import VolumeUpdateParams = API.VolumeUpdateParams;
  export import VolumeListParams = API.VolumeListParams;

  export import Actions = API.Actions;
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionAttachResponse = API.ActionAttachResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionDetachResponse = API.ActionDetachResponse;
  export import ActionResizeResponse = API.ActionResizeResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionAttachParams = API.ActionAttachParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
  export import ActionResizeParams = API.ActionResizeParams;
}
