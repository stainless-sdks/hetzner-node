// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Actions extends APIResource {
  /**
   * Returns a specific Action for a Certificate. Only type `managed` Certificates
   * have Actions.
   */
  retrieve(
    id: number,
    actionId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRetrieveResponse> {
    return this.get(`/certificates/${id}/actions/${actionId}`, options);
  }

  /**
   * Returns all Action objects for a Certificate. You can sort the results by using
   * the `sort` URI parameter, and filter them with the `status` parameter.
   *
   * Only type `managed` Certificates can have Actions. For type `uploaded`
   * Certificates the `actions` key will always contain an empty array.
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
    return this.get(`/certificates/${id}/actions`, { query, ...options });
  }

  /**
   * Retry a failed Certificate issuance or renewal.
   *
   * Only applicable if the type of the Certificate is `managed` and the issuance or
   * renewal status is `failed`.
   *
   * #### Call specific error codes
   *
   * | Code                                                    | Description                                                               |
   * | ------------------------------------------------------- | ------------------------------------------------------------------------- |
   * | `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
   * | `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
   * | `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
   * | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
   * | `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
   * | `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
   * | `dns_zone_not_found`                                    | DNS zone not found                                                        |
   * | `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |
   */
  retry(id: number, options?: Core.RequestOptions): Core.APIPromise<ActionRetryResponse> {
    return this.post(`/certificates/${id}/actions/retry`, options);
  }
}

/**
 * Response to GET
 * https://api.hetzner.cloud/v1/certificates/{id}/actions/{action_id}
 */
export interface ActionRetrieveResponse {
  /**
   * Actions show the results and progress of asynchronous requests to the API.
   */
  action: Shared.Action;
}

/**
 * Response to GET https://api.hetzner.cloud/v1/certificates/{id}/actions
 */
export interface ActionListResponse {
  actions: Array<Shared.Action>;

  /**
   * Metadata contained in the response
   */
  meta?: Shared.ResponseMeta;
}

/**
 * Response to POST https://api.hetzner.cloud/v1/certificates/{id}/actions/retry
 */
export interface ActionRetryResponse {
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

export namespace Actions {
  export import ActionRetrieveResponse = API.ActionRetrieveResponse;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionRetryResponse = API.ActionRetryResponse;
  export import ActionListParams = API.ActionListParams;
}
