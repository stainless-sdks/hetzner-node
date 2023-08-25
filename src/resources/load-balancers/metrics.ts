// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import * as API from './index';

export class Metrics extends APIResource {
  /**
   * You must specify the type of metric to get: `open_connections`,
   * `connections_per_second`, `requests_per_second` or `bandwidth`. You can also
   * specify more than one type by comma separation, e.g.
   * `requests_per_second,bandwidth`.
   *
   * Depending on the type you will get different time series data:
   *
   * | Type                   | Timeseries             | Unit          | Description            |
   * | ---------------------- | ---------------------- | ------------- | ---------------------- |
   * | open_connections       | open_connections       | number        | Open connections       |
   * | connections_per_second | connections_per_second | connections/s | Connections per second |
   * | requests_per_second    | requests_per_second    | requests/s    | Requests per second    |
   * | bandwidth              | bandwidth.in           | bytes/s       | Ingress bandwidth      |
   * |                        | bandwidth.out          | bytes/s       | Egress bandwidth       |
   *
   * Metrics are available for the last 30 days only.
   *
   * If you do not provide the step argument we will automatically adjust it so that
   * 200 samples are returned.
   *
   * We limit the number of samples to a maximum of 500 and will adjust the step
   * parameter accordingly.
   */
  list(
    id: number,
    query: MetricListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricListResponse> {
    return this.get(`/load_balancers/${id}/metrics`, { query, ...options });
  }
}

export interface MetricListResponse {
  metrics: MetricListResponse.Metrics;
}

export namespace MetricListResponse {
  export interface Metrics {
    /**
     * End of period of metrics reported (in ISO-8601 format)
     */
    end: string;

    /**
     * Start of period of metrics reported (in ISO-8601 format)
     */
    start: string;

    /**
     * Resolution of results in seconds.
     */
    step: number;

    /**
     * Hash with timeseries information, containing the name of timeseries as key
     */
    time_series: Record<string, Metrics.TimeSeries>;
  }

  export namespace Metrics {
    export interface TimeSeries {
      /**
       * Metrics Timestamps with values
       */
      values: Array<Array<number | string>>;
    }
  }
}

export interface MetricListParams {
  /**
   * End of period to get Metrics for (in ISO-8601 format)
   */
  end: string;

  /**
   * Start of period to get Metrics for (in ISO-8601 format)
   */
  start: string;

  /**
   * Type of metrics to get
   */
  type: 'open_connections' | 'connections_per_second' | 'requests_per_second' | 'bandwidth';

  /**
   * Resolution of results in seconds
   */
  step?: string;
}

export namespace Metrics {
  export import MetricListResponse = API.MetricListResponse;
  export import MetricListParams = API.MetricListParams;
}
