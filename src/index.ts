// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';
import * as Errors from './error';
import type { Agent } from 'hetzner/_shims/agent';
import * as Uploads from './uploads';

export interface ClientOptions {
  /**
   * Defaults to process.env["HETZNER_API_TOKEN"].
   */
  apiToken?: string;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   */
  baseURL?: string;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Hetzner API. */
export class Hetzner extends Core.APIClient {
  apiToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Hetzner API.
   *
   * @param {string} [opts.apiToken=process.env['HETZNER_API_TOKEN']] - The API Token to send to the API.
   * @param {string} [opts.baseURL] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ apiToken = Core.readEnv('HETZNER_API_TOKEN'), ...opts }: ClientOptions = {}) {
    if (apiToken === undefined) {
      throw new Error(
        "The HETZNER_API_TOKEN environment variable is missing or empty; either provide it, or instantiate the Hetzner client with an apiToken option, like new Hetzner({ apiToken: 'my apiToken' }).",
      );
    }

    const options: ClientOptions = {
      apiToken,
      baseURL: `https://api.hetzner.cloud/v1`,
      ...opts,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.apiToken = apiToken;
  }

  actions: API.Actions = new API.Actions(this);
  certificates: API.Certificates = new API.Certificates(this);
  datacenters: API.Datacenters = new API.Datacenters(this);
  firewalls: API.Firewalls = new API.Firewalls(this);
  floatingIps: API.FloatingIps = new API.FloatingIps(this);
  images: API.Images = new API.Images(this);
  isos: API.Isos = new API.Isos(this);
  loadBalancerTypes: API.LoadBalancerTypes = new API.LoadBalancerTypes(this);
  loadBalancers: API.LoadBalancers = new API.LoadBalancers(this);
  locations: API.Locations = new API.Locations(this);
  networks: API.Networks = new API.Networks(this);
  placementGroups: API.PlacementGroups = new API.PlacementGroups(this);
  pricing: API.Pricing = new API.Pricing(this);
  primaryIps: API.PrimaryIps = new API.PrimaryIps(this);
  serverTypes: API.ServerTypes = new API.ServerTypes(this);
  servers: API.Servers = new API.Servers(this);
  sshKeys: API.SshKeys = new API.SshKeys(this);
  volumes: API.Volumes = new API.Volumes(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(): Core.Headers {
    return {
      ...super.defaultHeaders(),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(): Core.Headers {
    return { Authorization: `Bearer ${this.apiToken}` };
  }

  static Hetzner = this;

  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
}

export const {
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Hetzner {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import FloatingIpsPage = Pagination.FloatingIpsPage;
  export import FloatingIpsPageParams = Pagination.FloatingIpsPageParams;
  export import FloatingIpsPageResponse = Pagination.FloatingIpsPageResponse;

  export import ServersPage = Pagination.ServersPage;
  export import ServersPageParams = Pagination.ServersPageParams;
  export import ServersPageResponse = Pagination.ServersPageResponse;

  export import Actions = API.Actions;
  export import ActionListParams = API.ActionListParams;

  export import Certificates = API.Certificates;
  export import Certificate = API.Certificate;
  export import CertificateResponse = API.CertificateResponse;
  export import CertificateCreateResponse = API.CertificateCreateResponse;
  export import CertificateListResponse = API.CertificateListResponse;
  export import CertificateCreateParams = API.CertificateCreateParams;
  export import CertificateUpdateParams = API.CertificateUpdateParams;
  export import CertificateListParams = API.CertificateListParams;

  export import Datacenters = API.Datacenters;
  export import DatacenterRetrieveResponse = API.DatacenterRetrieveResponse;
  export import DatacenterListResponse = API.DatacenterListResponse;
  export import DatacenterListParams = API.DatacenterListParams;

  export import Firewalls = API.Firewalls;
  export import Firewall = API.Firewall;
  export import FirewallResponse = API.FirewallResponse;
  export import Rule = API.Rule;
  export import FirewallCreateResponse = API.FirewallCreateResponse;
  export import FirewallListResponse = API.FirewallListResponse;
  export import FirewallCreateParams = API.FirewallCreateParams;
  export import FirewallUpdateParams = API.FirewallUpdateParams;
  export import FirewallListParams = API.FirewallListParams;

  export import FloatingIps = API.FloatingIps;
  export import FloatingIpCreateResponse = API.FloatingIpCreateResponse;
  export import FloatingIpRetrieveResponse = API.FloatingIpRetrieveResponse;
  export import FloatingIpUpdateResponse = API.FloatingIpUpdateResponse;
  export import FloatingIpListResponse = API.FloatingIpListResponse;
  export import FloatingIpListResponsesFloatingIpsPage = API.FloatingIpListResponsesFloatingIpsPage;
  export import FloatingIpCreateParams = API.FloatingIpCreateParams;
  export import FloatingIpUpdateParams = API.FloatingIpUpdateParams;
  export import FloatingIpListParams = API.FloatingIpListParams;

  export import Images = API.Images;
  export import ImageRetrieveResponse = API.ImageRetrieveResponse;
  export import ImageUpdateResponse = API.ImageUpdateResponse;
  export import ImageListResponse = API.ImageListResponse;
  export import ImageUpdateParams = API.ImageUpdateParams;
  export import ImageListParams = API.ImageListParams;

  export import Isos = API.Isos;
  export import IsoRetrieveResponse = API.IsoRetrieveResponse;
  export import IsoListResponse = API.IsoListResponse;
  export import IsoListParams = API.IsoListParams;

  export import LoadBalancerTypes = API.LoadBalancerTypes;
  export import LoadBalancerTypeRetrieveResponse = API.LoadBalancerTypeRetrieveResponse;
  export import LoadBalancerTypeListResponse = API.LoadBalancerTypeListResponse;
  export import LoadBalancerTypeListParams = API.LoadBalancerTypeListParams;

  export import LoadBalancers = API.LoadBalancers;
  export import LoadBalancerService = API.LoadBalancerService;
  export import LoadBalancerServiceHealthCheck = API.LoadBalancerServiceHealthCheck;
  export import LoadBalancerServiceHTTP = API.LoadBalancerServiceHTTP;
  export import LoadBalancerTarget = API.LoadBalancerTarget;
  export import LoadBalancerTargetHealthStatus = API.LoadBalancerTargetHealthStatus;
  export import LoadBalancerTargetIp = API.LoadBalancerTargetIp;
  export import LoadBalancerTargetLabelSelector = API.LoadBalancerTargetLabelSelector;
  export import LoadBalancerTargetServer = API.LoadBalancerTargetServer;
  export import LoadBalancerTargetTarget = API.LoadBalancerTargetTarget;
  export import LoadBalancerCreateResponse = API.LoadBalancerCreateResponse;
  export import LoadBalancerRetrieveResponse = API.LoadBalancerRetrieveResponse;
  export import LoadBalancerUpdateResponse = API.LoadBalancerUpdateResponse;
  export import LoadBalancerListResponse = API.LoadBalancerListResponse;
  export import LoadBalancerCreateParams = API.LoadBalancerCreateParams;
  export import LoadBalancerUpdateParams = API.LoadBalancerUpdateParams;
  export import LoadBalancerListParams = API.LoadBalancerListParams;

  export import Locations = API.Locations;
  export import LocationRetrieveResponse = API.LocationRetrieveResponse;
  export import LocationListResponse = API.LocationListResponse;
  export import LocationListParams = API.LocationListParams;

  export import Networks = API.Networks;
  export import NetworkCreateResponse = API.NetworkCreateResponse;
  export import NetworkRetrieveResponse = API.NetworkRetrieveResponse;
  export import NetworkUpdateResponse = API.NetworkUpdateResponse;
  export import NetworkListResponse = API.NetworkListResponse;
  export import NetworkCreateParams = API.NetworkCreateParams;
  export import NetworkUpdateParams = API.NetworkUpdateParams;
  export import NetworkListParams = API.NetworkListParams;

  export import PlacementGroups = API.PlacementGroups;
  export import PlacementGroup = API.PlacementGroup;
  export import PlacementGroupNullable = API.PlacementGroupNullable;
  export import PlacementGroupResponse = API.PlacementGroupResponse;
  export import PlacementGroupCreateResponse = API.PlacementGroupCreateResponse;
  export import PlacementGroupListResponse = API.PlacementGroupListResponse;
  export import PlacementGroupCreateParams = API.PlacementGroupCreateParams;
  export import PlacementGroupUpdateParams = API.PlacementGroupUpdateParams;
  export import PlacementGroupListParams = API.PlacementGroupListParams;

  export import Pricing = API.Pricing;
  export import PricingRetrieveResponse = API.PricingRetrieveResponse;

  export import PrimaryIps = API.PrimaryIps;
  export import PrimaryIp = API.PrimaryIp;
  export import PrimaryIpResponse = API.PrimaryIpResponse;
  export import PrimaryIpCreateResponse = API.PrimaryIpCreateResponse;
  export import PrimaryIpListResponse = API.PrimaryIpListResponse;
  export import PrimaryIpCreateParams = API.PrimaryIpCreateParams;
  export import PrimaryIpUpdateParams = API.PrimaryIpUpdateParams;
  export import PrimaryIpListParams = API.PrimaryIpListParams;

  export import ServerTypes = API.ServerTypes;
  export import DeprecationInfo = API.DeprecationInfo;
  export import ServerTypeRetrieveResponse = API.ServerTypeRetrieveResponse;
  export import ServerTypeListResponse = API.ServerTypeListResponse;
  export import ServerTypeListParams = API.ServerTypeListParams;

  export import Servers = API.Servers;
  export import Server = API.Server;
  export import ServerPublicNetFirewall = API.ServerPublicNetFirewall;
  export import ServerCreateResponse = API.ServerCreateResponse;
  export import ServerRetrieveResponse = API.ServerRetrieveResponse;
  export import ServerUpdateResponse = API.ServerUpdateResponse;
  export import ServerDeleteResponse = API.ServerDeleteResponse;
  export import ServersServersPage = API.ServersServersPage;
  export import ServerCreateParams = API.ServerCreateParams;
  export import ServerUpdateParams = API.ServerUpdateParams;
  export import ServerListParams = API.ServerListParams;

  export import SshKeys = API.SshKeys;
  export import SshKeyCreateResponse = API.SshKeyCreateResponse;
  export import SshKeyRetrieveResponse = API.SshKeyRetrieveResponse;
  export import SshKeyUpdateResponse = API.SshKeyUpdateResponse;
  export import SshKeyListResponse = API.SshKeyListResponse;
  export import SshKeyCreateParams = API.SshKeyCreateParams;
  export import SshKeyUpdateParams = API.SshKeyUpdateParams;
  export import SshKeyListParams = API.SshKeyListParams;

  export import Volumes = API.Volumes;
  export import VolumeCreateResponse = API.VolumeCreateResponse;
  export import VolumeRetrieveResponse = API.VolumeRetrieveResponse;
  export import VolumeUpdateResponse = API.VolumeUpdateResponse;
  export import VolumeListResponse = API.VolumeListResponse;
  export import VolumeCreateParams = API.VolumeCreateParams;
  export import VolumeUpdateParams = API.VolumeUpdateParams;
  export import VolumeListParams = API.VolumeListParams;

  export import Action = API.Action;
  export import ActionResponse = API.ActionResponse;
  export import ActionsResponse = API.ActionsResponse;
  export import NullableAction = API.NullableAction;
  export import ResponseMeta = API.ResponseMeta;
  export import SortParam = API.SortParam;
  export import StatusParam = API.StatusParam;
}

export default Hetzner;
