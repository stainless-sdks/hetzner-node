// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hetzner/core';
import { APIResource } from 'hetzner/resource';
import * as API from './index';

export class Metrics extends APIResource {
  /**
   * Get Metrics for specified Server.
   *
   * You must specify the type of metric to get: cpu, disk or network. You can also
   * specify more than one type by comma separation, e.g. cpu,disk.
   *
   * Depending on the type you will get different time series data
   *
   * | Type    | Timeseries              | Unit      | Description                                          |
   * | ------- | ----------------------- | --------- | ---------------------------------------------------- |
   * | cpu     | cpu                     | percent   | Percent CPU usage                                    |
   * | disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
   * |         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
   * |         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
   * |         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
   * | network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
   * |         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
   * |         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
   * |         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |
   *
   * Metrics are available for the last 30 days only.
   *
   * If you do not provide the step argument we will automatically adjust it so that
   * a maximum of 200 samples are returned.
   *
   * We limit the number of samples returned to a maximum of 500 and will adjust the
   * step parameter accordingly.
   */
  list(
    id: number,
    query: MetricListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricListResponse> {
    return this.get(`/servers/${id}/metrics`, { query, ...options });
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
  type: 'cpu' | 'disk' | 'network';

  /**
   * Resolution of results in seconds
   */
  step?: string;
}

export namespace Metrics {
  export import MetricListResponse = API.MetricListResponse;
  export import MetricListParams = API.MetricListParams;
}
