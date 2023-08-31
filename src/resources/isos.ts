// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Isos extends APIResource {
  /**
   * Returns a specific ISO object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<IsoRetrieveResponse> {
    return this.get(`/isos/${id}`, options);
  }

  /**
   * Returns all available ISO objects.
   */
  list(query?: IsoListParams, options?: Core.RequestOptions): Core.APIPromise<IsoListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<IsoListResponse>;
  list(
    query: IsoListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IsoListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/isos', { query, ...options });
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/isos/{id}
 */
export interface IsoRetrieveResponse {
  iso: IsoRetrieveResponse.Iso;
}

export namespace IsoRetrieveResponse {
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
}

/**
 * Response to GET https://api.hetzner.cloud/v1/isos
 */
export interface IsoListResponse {
  isos: Array<IsoListResponse.Iso>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

export namespace IsoListResponse {
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
}

export interface IsoListParams {
  /**
   * Return only ISOs with the given architecture.
   */
  architecture?: string;

  /**
   * Include Images with wildcard architecture (architecture is null). Works only if
   * architecture filter is specified.
   */
  include_architecture_wildcard?: boolean;

  /**
   * Can be used to filter ISOs by their name. The response will only contain the ISO
   * matching the specified name.
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
}

export namespace Isos {
  export import IsoRetrieveResponse = API.IsoRetrieveResponse;
  export import IsoListResponse = API.IsoListResponse;
  export import IsoListParams = API.IsoListParams;
}
