// File generated from our OpenAPI spec by Stainless.

export interface Action {
  /**
   * ID of the Resource
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
  status: 'success' | 'running' | 'error';
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
     * ID of the Resource
     */
    id: number;

    /**
     * Type of resource referenced
     */
    type: string;
  }
}

export interface ActionResponse {
  action: Action;
}

export interface ActionsResponse {
  actions: Array<Action>;

  meta?: ResponseMeta;
}

export interface NullableAction {
  /**
   * ID of the Resource
   */
  id: number;

  /**
   * Command executed in the Action
   */
  command: string;

  /**
   * Error message for the Action if error occurred, otherwise null
   */
  error: NullableAction.Error | null;

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
  resources: Array<NullableAction.Resource>;

  /**
   * Point in time when the Action was started (in ISO-8601 format)
   */
  started: string;

  /**
   * Status of the Action
   */
  status: 'success' | 'running' | 'error';
}

export namespace NullableAction {
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
     * ID of the Resource
     */
    id: number;

    /**
     * Type of resource referenced
     */
    type: string;
  }
}

export interface ResponseMeta {
  pagination: ResponseMeta.Pagination;
}

export namespace ResponseMeta {
  export interface Pagination {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    last_page: number | null;

    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    next_page: number | null;

    /**
     * Current page number
     */
    page: number;

    /**
     * Maximum number of items shown per page in the response
     */
    per_page: number;

    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previous_page: number | null;

    /**
     * The total number of entries that exist in the database for this query. Nullable
     * if unknown.
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
  | 'started'
  | 'started:asc'
  | 'started:desc'
  | 'finished'
  | 'finished:asc'
  | 'finished:desc';

export type StatusParam = 'running' | 'success' | 'error';
