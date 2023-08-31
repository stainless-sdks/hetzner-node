// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import * as API from './index';

export class Images extends APIResource {
  actions: Actions = new Actions(this.client);

  /**
   * Returns a specific Image object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<ImageRetrieveResponse> {
    return this.get(`/images/${id}`, options);
  }

  /**
   * Updates the Image. You may change the description, convert a Backup Image to a
   * Snapshot Image or change the Image labels. Only Images of type `snapshot` and
   * `backup` can be updated.
   *
   * Note that when updating labels, the current set of labels will be replaced with
   * the labels provided in the request body. So, for example, if you want to add a
   * new label, you have to provide all existing labels plus the new label in the
   * request body.
   */
  update(
    id: number,
    body?: ImageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<ImageUpdateResponse>;
  update(
    id: number,
    body: ImageUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/images/${id}`, { body, ...options });
  }

  /**
   * Returns all Image objects. You can select specific Image types only and sort the
   * results by using URI parameters.
   */
  list(query?: ImageListParams, options?: Core.RequestOptions): Core.APIPromise<ImageListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ImageListResponse>;
  list(
    query: ImageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/images', { query, ...options });
  }

  /**
   * Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/images/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/images/{id}
 */
export interface ImageRetrieveResponse {
  image?: ImageRetrieveResponse.Image;
}

export namespace ImageRetrieveResponse {
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
}

/**
 * Response to PUT https://api.hetzner.cloud/v1/images/{id}
 */
export interface ImageUpdateResponse {
  image?: ImageUpdateResponse.Image;
}

export namespace ImageUpdateResponse {
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
}

/**
 * Response to GET https://api.hetzner.cloud/v1/images
 */
export interface ImageListResponse {
  images: Array<ImageListResponse.Image>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

export namespace ImageListResponse {
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
}

export interface ImageUpdateParams {
  /**
   * New description of Image
   */
  description?: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * Destination Image type to convert to
   */
  type?: 'snapshot';
}

export interface ImageListParams {
  /**
   * Return only Images with the given architecture.
   */
  architecture?: string;

  /**
   * Can be used multiple times. Server ID linked to the Image. Only available for
   * Images of type `backup`
   */
  bound_to?: string;

  /**
   * Can be used multiple times.
   */
  include_deprecated?: boolean;

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
   * Can be used multiple times. The response will only contain Images matching the
   * status.
   */
  status?: 'available' | 'creating';

  /**
   * Can be used multiple times.
   */
  type?: 'system' | 'snapshot' | 'backup' | 'app';
}

export namespace Images {
  export import ImageRetrieveResponse = API.ImageRetrieveResponse;
  export import ImageUpdateResponse = API.ImageUpdateResponse;
  export import ImageListResponse = API.ImageListResponse;
  export import ImageUpdateParams = API.ImageUpdateParams;
  export import ImageListParams = API.ImageListParams;

  export import Actions = API.Actions;
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionChangeProtectionResponse = API.ActionChangeProtectionResponse;
  export import ActionListParams = API.ActionListParams;
  export import ActionChangeProtectionParams = API.ActionChangeProtectionParams;
}
