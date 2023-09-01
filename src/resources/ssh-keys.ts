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

/**
 * Response to POST https://api.hetzner.cloud/v1/ssh_keys
 */
export interface SshKeyCreateResponse {
  /**
   * SSH keys are public keys you provide to the cloud system. They can be injected
   * into Servers at creation time. We highly recommend that you use keys instead of
   * passwords to manage your Servers.
   */
  ssh_key: SshKeyCreateResponse.SshKey;
}

export namespace SshKeyCreateResponse {
  /**
   * SSH keys are public keys you provide to the cloud system. They can be injected
   * into Servers at creation time. We highly recommend that you use keys instead of
   * passwords to manage your Servers.
   */
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

/**
 * Response to GET https://api.hetzner.cloud/v1/ssh_keys/{id}
 */
export interface SshKeyRetrieveResponse {
  /**
   * SSH keys are public keys you provide to the cloud system. They can be injected
   * into Servers at creation time. We highly recommend that you use keys instead of
   * passwords to manage your Servers.
   */
  ssh_key: SshKeyRetrieveResponse.SshKey;
}

export namespace SshKeyRetrieveResponse {
  /**
   * SSH keys are public keys you provide to the cloud system. They can be injected
   * into Servers at creation time. We highly recommend that you use keys instead of
   * passwords to manage your Servers.
   */
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

/**
 * Response to PUT https://api.hetzner.cloud/v1/ssh_keys/{id}
 */
export interface SshKeyUpdateResponse {
  /**
   * SSH keys are public keys you provide to the cloud system. They can be injected
   * into Servers at creation time. We highly recommend that you use keys instead of
   * passwords to manage your Servers.
   */
  ssh_key: SshKeyUpdateResponse.SshKey;
}

export namespace SshKeyUpdateResponse {
  /**
   * SSH keys are public keys you provide to the cloud system. They can be injected
   * into Servers at creation time. We highly recommend that you use keys instead of
   * passwords to manage your Servers.
   */
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

/**
 * Response to GET https://api.hetzner.cloud/v1/ssh_keys
 */
export interface SshKeyListResponse {
  ssh_keys: Array<SshKeyListResponse.SshKey>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

export namespace SshKeyListResponse {
  /**
   * SSH keys are public keys you provide to the cloud system. They can be injected
   * into Servers at creation time. We highly recommend that you use keys instead of
   * passwords to manage your Servers.
   */
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
  labels?: Record<string, string>;
}

export interface SshKeyUpdateParams {
  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

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
