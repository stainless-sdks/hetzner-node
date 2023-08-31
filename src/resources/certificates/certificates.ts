// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import { Actions } from './actions';
import * as API from './index';

export class Certificates extends APIResource {
  actions: Actions = new Actions(this.client);

  /**
   * Creates a new Certificate.
   *
   * The default type **uploaded** allows for uploading your existing `certificate`
   * and `private_key` in PEM format. You have to monitor its expiration date and
   * handle renewal yourself.
   *
   * In contrast, type **managed** requests a new Certificate from _Let's Encrypt_
   * for the specified `domain_names`. Only domains managed by _Hetzner DNS_ are
   * supported. We handle renewal and timely alert the project owner via email if
   * problems occur.
   *
   * For type `managed` Certificates the `action` key of the response contains the
   * Action that allows for tracking the issuance process. For type `uploaded`
   * Certificates the `action` is always null.
   */
  create(
    body: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateCreateResponse> {
    return this.post('/certificates', { body, ...options });
  }

  /**
   * Gets a specific Certificate object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<CertificateRetrieveResponse> {
    return this.get(`/certificates/${id}`, options);
  }

  /**
   * Updates the Certificate properties.
   *
   * Note that when updating labels, the Certificate’s current set of labels will be
   * replaced with the labels provided in the request body. So, for example, if you
   * want to add a new label, you have to provide all existing labels plus the new
   * label in the request body.
   *
   * Note: if the Certificate object changes during the request, the response will be
   * a “conflict” error.
   */
  update(
    id: number,
    body?: CertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<CertificateUpdateResponse>;
  update(
    id: number,
    body: CertificateUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.put(`/certificates/${id}`, { body, ...options });
  }

  /**
   * Returns all Certificate objects.
   */
  list(
    query?: CertificateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CertificateListResponse>;
  list(
    query: CertificateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/certificates', { query, ...options });
  }

  /**
   * Deletes a Certificate.
   */
  del(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/certificates/${id}`, { ...options, headers: { Accept: '', ...options?.headers } });
  }
}

/**
 * TLS/SSL Certificates prove the identity of a Server and are used to encrypt
 * client traffic.
 */
export interface Certificate {
  /**
   * ID of the Resource
   */
  id: number;

  /**
   * Certificate and chain in PEM format, in order so that each record directly
   * certifies the one preceding
   */
  certificate: string | null;

  /**
   * Point in time when the Resource was created (in ISO-8601 format)
   */
  created: string;

  /**
   * Domains and subdomains covered by the Certificate
   */
  domain_names: Array<string>;

  /**
   * SHA256 fingerprint of the Certificate
   */
  fingerprint: string | null;

  /**
   * User-defined labels (key-value pairs)
   */
  labels: Record<string, string>;

  /**
   * Name of the Resource. Must be unique per Project.
   */
  name: string;

  /**
   * Point in time when the Certificate stops being valid (in ISO-8601 format)
   */
  not_valid_after: string | null;

  /**
   * Point in time when the Certificate becomes valid (in ISO-8601 format)
   */
  not_valid_before: string | null;

  /**
   * Resources currently using the Certificate
   */
  used_by: Array<Certificate.UsedBy>;

  /**
   * Current status of a type `managed` Certificate, always _null_ for type
   * `uploaded` Certificates
   */
  status?: Certificate.Status | null;

  /**
   * Type of the Certificate
   */
  type?: 'managed' | 'uploaded';
}

export namespace Certificate {
  export interface UsedBy {
    /**
     * ID of the Resource | ID of resource referenced
     */
    id: number;

    /**
     * Type of resource referenced
     */
    type: string;
  }

  /**
   * Current status of a type `managed` Certificate, always _null_ for type
   * `uploaded` Certificates
   */
  export interface Status {
    /**
     * If issuance or renewal reports `failed`, this property contains information
     * about what happened
     */
    error?: Status.Error | null;

    /**
     * Status of the issuance process of the Certificate
     */
    issuance?: 'completed' | 'failed' | 'pending';

    /**
     * Status of the renewal process of the Certificate.
     */
    renewal?: 'failed' | 'pending' | 'scheduled' | 'unavailable';
  }

  export namespace Status {
    /**
     * If issuance or renewal reports `failed`, this property contains information
     * about what happened
     */
    export interface Error {
      code?: string;

      message?: string;
    }
  }
}

/**
 * Response to POST https://api.hetzner.cloud/v1/certificates
 */
export interface CertificateCreateResponse {
  /**
   * TLS/SSL Certificates prove the identity of a Server and are used to encrypt
   * client traffic.
   */
  certificate: Certificate;

  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action?: CertificateCreateResponse.Action | null;
}

export namespace CertificateCreateResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  export interface Action {
    /**
     * ID of the Action
     */
    id: number;

    /**
     * Command executed in the Action
     */
    command: string;

    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: Action.Error | null;

    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the
     * Action is finished otherwise null.
     */
    finished: string | null;

    /**
     * Progress of Action in percent
     */
    progress: number;

    /**
     * Resources the Action relates to
     */
    resources: Array<Action.Resource>;

    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;

    /**
     * Status of the Action
     */
    status: 'error' | 'running' | 'success';
  }

  export namespace Action {
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    export interface Error {
      /**
       * Fixed machine readable code
       */
      code: string;

      /**
       * Humanized error message
       */
      message: string;
    }

    export interface Resource {
      /**
       * ID of the Resource | ID of resource referenced
       */
      id: number;

      /**
       * Type of resource referenced
       */
      type: string;
    }
  }
}

/**
 * Response to GET https://api.hetzner.cloud/v1/certificates/{id}
 */
export interface CertificateRetrieveResponse {
  /**
   * TLS/SSL Certificates prove the identity of a Server and are used to encrypt
   * client traffic.
   */
  certificate: Certificate;
}

/**
 * Response to PUT https://api.hetzner.cloud/v1/certificates/{id}
 */
export interface CertificateUpdateResponse {
  /**
   * TLS/SSL Certificates prove the identity of a Server and are used to encrypt
   * client traffic.
   */
  certificate: Certificate;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/certificates
 */
export interface CertificateListResponse {
  certificates: Array<Certificate>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

export interface CertificateCreateParams {
  /**
   * Name of the Certificate
   */
  name: string;

  /**
   * Certificate and chain in PEM format, in order so that each record directly
   * certifies the one preceding. Required for type `uploaded` Certificates.
   */
  certificate?: string;

  /**
   * Domains and subdomains that should be contained in the Certificate issued by
   * _Let's Encrypt_. Required for type `managed` Certificates.
   */
  domain_names?: Array<string>;

  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * Certificate key in PEM format. Required for type `uploaded` Certificates.
   */
  private_key?: string;

  /**
   * Choose between uploading a Certificate in PEM format or requesting a managed
   * _Let's Encrypt_ Certificate. If omitted defaults to `uploaded`.
   */
  type?: 'managed' | 'uploaded';
}

export interface CertificateUpdateParams {
  /**
   * User-defined labels (key-value pairs)
   */
  labels?: Record<string, string>;

  /**
   * New Certificate name
   */
  name?: string;
}

export interface CertificateListParams {
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
   * Can be used multiple times. The response will only contain Certificates matching
   * the type.
   */
  type?: 'uploaded' | 'managed';
}

export namespace Certificates {
  export import Certificate = API.Certificate;
  export import CertificateCreateResponse = API.CertificateCreateResponse;
  export import CertificateRetrieveResponse = API.CertificateRetrieveResponse;
  export import CertificateUpdateResponse = API.CertificateUpdateResponse;
  export import CertificateListResponse = API.CertificateListResponse;
  export import CertificateCreateParams = API.CertificateCreateParams;
  export import CertificateUpdateParams = API.CertificateUpdateParams;
  export import CertificateListParams = API.CertificateListParams;

  export import Actions = API.Actions;
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionRetryResponse = API.ActionRetryResponse;
  export import ActionListParams = API.ActionListParams;
}
