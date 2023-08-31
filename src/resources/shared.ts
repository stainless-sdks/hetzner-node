// File generated from our OpenAPI spec by Stainless.

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

export interface HealthStatus {
  listen_port?: number;

  status?: 'healthy' | 'unhealthy' | 'unknown';
}

/**
 * Metadata contained in the response
 */
export interface ResponseMeta {
  /**
   * Information about the current pagination. The keys previous_page, next_page,
   * last_page, and total_entries may be null when on the first page, last page, or
   * when the total number of entries is unknown
   */
  pagination: ResponseMeta.Pagination;
}

export namespace ResponseMeta {
  /**
   * Information about the current pagination. The keys previous_page, next_page,
   * last_page, and total_entries may be null when on the first page, last page, or
   * when the total number of entries is unknown
   */
  export interface Pagination {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     * | The last page number
     */
    last_page: number | null;

    /**
     * ID of the next page. Can be null if the current page is the last one. | The next
     * page number
     */
    next_page: number | null;

    /**
     * Current page number | The current page number
     */
    page: number;

    /**
     * Maximum number of items shown per page in the response | The number of entries
     * per page
     */
    per_page: number;

    /**
     * ID of the previous page. Can be null if the current page is the first one. | The
     * previous page number
     */
    previous_page: number | null;

    /**
     * The total number of entries that exist in the database for this query. Nullable
     * if unknown. | The total number of entries
     */
    total_entries: number | null;
  }
}

export type SortParam =
  | 'id'
  | 'id:asc'
  | 'id:desc'
  | 'command'
  | 'command:asc'
  | 'command:desc'
  | 'status'
  | 'status:asc'
  | 'status:desc'
  | 'progress'
  | 'progress:asc'
  | 'progress:desc'
  | 'started'
  | 'started:asc'
  | 'started:desc'
  | 'finished'
  | 'finished:asc'
  | 'finished:desc';

export type StatusParam = 'running' | 'success' | 'error';
