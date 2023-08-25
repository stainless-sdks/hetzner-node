// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class SshKeys extends APIResource {
  /**
   * Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is
   * created, it can be used in other calls such as creating Servers.
   */
  create(body: SshKeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<SshKeyCreateResponse> {
    return this.post('/ssh_keys', { body, ...options });
  }

  /**
   * Returns a specific SSH key object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SshKeyRetrieveResponse> {
    return this.get(`/ssh_keys/${id}`, options);
  }

  /**
   * Updates an SSH key. You can update an SSH key name and an SSH key labels.
   *
   * Please note that when updating labels, the SSH key current set of labels will be
   * replaced with the labels provided in the request body. So, for example, if you
   * want to add a new label, you have to provide all existing labels plus the new
   * label in the request body.
   */
  update(
    id: number,
    body?: SshKeyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SshKeyUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<SshKeyUpdateResponse>;
  update(
    id: number,
    body: SshKeyUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SshKeyUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/ssh_keys/${id}`, { body, ...options });
  }

  /**
   * Returns all SSH key objects.
   */
  list(query?: SshKeyListParams, options?: Core.RequestOptions): Core.APIPromise<SshKeyListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SshKeyListResponse>;
  list(
    query: SshKeyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SshKeyListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/ssh_keys', { query, ...options });
  }

  /**
   * Deletes an SSH key. It cannot be used anymore.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/ssh_keys/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

export interface SshKeyCreateResponse {
  ssh_key: SshKeyCreateResponse.SshKey;
}

export namespace SshKeyCreateResponse {
  export interface SshKey {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Fingerprint of public key
     */
    fingerprint: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Public key
     */
    public_key: string;
  }
}

export interface SshKeyRetrieveResponse {
  ssh_key: SshKeyRetrieveResponse.SshKey;
}

export namespace SshKeyRetrieveResponse {
  export interface SshKey {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Fingerprint of public key
     */
    fingerprint: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Public key
     */
    public_key: string;
  }
}

export interface SshKeyUpdateResponse {
  ssh_key: SshKeyUpdateResponse.SshKey;
}

export namespace SshKeyUpdateResponse {
  export interface SshKey {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Fingerprint of public key
     */
    fingerprint: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Public key
     */
    public_key: string;
  }
}

export interface SshKeyListResponse {
  ssh_keys: Array<SshKeyListResponse.SshKey>;

  meta?: Shared.ResponseMeta;
}

export namespace SshKeyListResponse {
  export interface SshKey {
    /**
     * ID of the Resource
     */
    id: number;

    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;

    /**
     * Fingerprint of public key
     */
    fingerprint: string;

    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;

    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;

    /**
     * Public key
     */
    public_key: string;
  }
}

export interface SshKeyCreateParams {
  /**
   * Name of the SSH key
   */
  name: string;

  /**
   * Public key
   */
  public_key: string;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: unknown;
}

export interface SshKeyUpdateParams {
  /**
   * User-defined labels (key-value pairs)
   */
  labels?: unknown;

  /**
   * New name Name to set
   */
  name?: string;
}

export interface SshKeyListParams {
  /**
   * Can be used to filter SSH keys by their fingerprint. The response will only
   * contain the SSH key matching the specified fingerprint.
   */
  fingerprint?: string;

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
  sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc';
}

export namespace SshKeys {
  export import SshKeyCreateResponse = API.SshKeyCreateResponse;
  export import SshKeyRetrieveResponse = API.SshKeyRetrieveResponse;
  export import SshKeyUpdateResponse = API.SshKeyUpdateResponse;
  export import SshKeyListResponse = API.SshKeyListResponse;
  export import SshKeyCreateParams = API.SshKeyCreateParams;
  export import SshKeyUpdateParams = API.SshKeyUpdateParams;
  export import SshKeyListParams = API.SshKeyListParams;
}
