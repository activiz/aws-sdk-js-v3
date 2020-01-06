import {
  AddTagsRequest,
  CancelElasticsearchServiceSoftwareUpdateRequest,
  CancelElasticsearchServiceSoftwareUpdateResponse,
  CreateElasticsearchDomainRequest,
  CreateElasticsearchDomainResponse,
  DeleteElasticsearchDomainRequest,
  DeleteElasticsearchDomainResponse,
  DescribeElasticsearchDomainConfigRequest,
  DescribeElasticsearchDomainConfigResponse,
  DescribeElasticsearchDomainRequest,
  DescribeElasticsearchDomainResponse,
  DescribeElasticsearchDomainsRequest,
  DescribeElasticsearchDomainsResponse,
  DescribeElasticsearchInstanceTypeLimitsRequest,
  DescribeElasticsearchInstanceTypeLimitsResponse,
  DescribeReservedElasticsearchInstanceOfferingsRequest,
  DescribeReservedElasticsearchInstanceOfferingsResponse,
  DescribeReservedElasticsearchInstancesRequest,
  DescribeReservedElasticsearchInstancesResponse,
  GetCompatibleElasticsearchVersionsRequest,
  GetCompatibleElasticsearchVersionsResponse,
  GetUpgradeHistoryRequest,
  GetUpgradeHistoryResponse,
  GetUpgradeStatusRequest,
  GetUpgradeStatusResponse,
  ListDomainNamesResponse,
  ListElasticsearchInstanceTypesRequest,
  ListElasticsearchInstanceTypesResponse,
  ListElasticsearchVersionsRequest,
  ListElasticsearchVersionsResponse,
  ListTagsRequest,
  ListTagsResponse,
  PurchaseReservedElasticsearchInstanceOfferingRequest,
  PurchaseReservedElasticsearchInstanceOfferingResponse,
  RemoveTagsRequest,
  StartElasticsearchServiceSoftwareUpdateRequest,
  StartElasticsearchServiceSoftwareUpdateResponse,
  UpdateElasticsearchDomainConfigRequest,
  UpdateElasticsearchDomainConfigResponse,
  UpgradeElasticsearchDomainRequest,
  UpgradeElasticsearchDomainResponse
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | {}
  | AddTagsRequest
  | CancelElasticsearchServiceSoftwareUpdateRequest
  | CreateElasticsearchDomainRequest
  | DeleteElasticsearchDomainRequest
  | DescribeElasticsearchDomainConfigRequest
  | DescribeElasticsearchDomainRequest
  | DescribeElasticsearchDomainsRequest
  | DescribeElasticsearchInstanceTypeLimitsRequest
  | DescribeReservedElasticsearchInstanceOfferingsRequest
  | DescribeReservedElasticsearchInstancesRequest
  | GetCompatibleElasticsearchVersionsRequest
  | GetUpgradeHistoryRequest
  | GetUpgradeStatusRequest
  | ListElasticsearchInstanceTypesRequest
  | ListElasticsearchVersionsRequest
  | ListTagsRequest
  | PurchaseReservedElasticsearchInstanceOfferingRequest
  | RemoveTagsRequest
  | StartElasticsearchServiceSoftwareUpdateRequest
  | UpdateElasticsearchDomainConfigRequest
  | UpgradeElasticsearchDomainRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CancelElasticsearchServiceSoftwareUpdateResponse
  | CreateElasticsearchDomainResponse
  | DeleteElasticsearchDomainResponse
  | DescribeElasticsearchDomainConfigResponse
  | DescribeElasticsearchDomainResponse
  | DescribeElasticsearchDomainsResponse
  | DescribeElasticsearchInstanceTypeLimitsResponse
  | DescribeReservedElasticsearchInstanceOfferingsResponse
  | DescribeReservedElasticsearchInstancesResponse
  | GetCompatibleElasticsearchVersionsResponse
  | GetUpgradeHistoryResponse
  | GetUpgradeStatusResponse
  | ListDomainNamesResponse
  | ListElasticsearchInstanceTypesResponse
  | ListElasticsearchVersionsResponse
  | ListTagsResponse
  | PurchaseReservedElasticsearchInstanceOfferingResponse
  | StartElasticsearchServiceSoftwareUpdateResponse
  | UpdateElasticsearchDomainConfigResponse
  | UpgradeElasticsearchDomainResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ElasticsearchServiceClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ElasticsearchServiceClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *       <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 *
 */
export class ElasticsearchServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticsearchServiceClientResolvedConfig
> {
  readonly config: ElasticsearchServiceClientResolvedConfig;

  constructor(configuration: ElasticsearchServiceClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
