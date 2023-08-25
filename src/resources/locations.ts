// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import { isRequestOptions } from 'hetzner/core';
import * as Shared from 'hetzner/resources/shared';
import * as API from './index';

export class Locations extends APIResource {
  /**
   * Returns a specific Location object.
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<LocationRetrieveResponse> {
    return this.get(`/locations/${id}`, options);
  }

  /**
   * Returns all Location objects.
   */
  list(query?: LocationListParams, options?: Core.RequestOptions): Core.APIPromise<LocationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LocationListResponse>;
  list(
    query: LocationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.get('/locations', { query, ...options });
  }
}

export interface LocationRetrieveResponse {
  location: LocationRetrieveResponse.Location;
}

export namespace LocationRetrieveResponse {
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
}

export interface LocationListResponse {
  locations: Array<LocationListResponse.Location>;

  meta: Shared.ResponseMeta;
}

export namespace LocationListResponse {
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
}

export interface LocationListParams {
  /**
   * Can be used to filter Locations by their name. The response will only contain
   * the Location matching the specified name.
   */
  name?: string;

  page?: number;

  per_page?: number;

  /**
   * Can be used multiple times.
   */
  sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc';
}

export namespace Locations {
  export import LocationRetrieveResponse = API.LocationRetrieveResponse;
  export import LocationListResponse = API.LocationListResponse;
  export import LocationListParams = API.LocationListParams;
}
