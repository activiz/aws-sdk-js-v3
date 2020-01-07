import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AdMarkers {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  SCTE35_ENHANCED = "SCTE35_ENHANCED"
}

export enum AdsOnDeliveryRestrictions {
  BOTH = "BOTH",
  NONE = "NONE",
  RESTRICTED = "RESTRICTED",
  UNRESTRICTED = "UNRESTRICTED"
}

/**
 * A Channel resource configuration.
 */
export interface Channel {
  __type?: "Channel";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace Channel {
  export function isa(o: any): o is Channel {
    return _smithy.isa(o, "Channel");
  }
}

/**
 * A Common Media Application Format (CMAF) encryption configuration.
 */
export interface CmafEncryption {
  __type?: "CmafEncryption";
  /**
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace CmafEncryption {
  export function isa(o: any): o is CmafEncryption {
    return _smithy.isa(o, "CmafEncryption");
  }
}

/**
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface CmafPackage {
  __type?: "CmafPackage";
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: CmafEncryption;

  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?: Array<HlsManifest>;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   *
   */
  SegmentDurationSeconds?: number;

  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   */
  SegmentPrefix?: string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace CmafPackage {
  export function isa(o: any): o is CmafPackage {
    return _smithy.isa(o, "CmafPackage");
  }
}

/**
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface CmafPackageCreateOrUpdateParameters {
  __type?: "CmafPackageCreateOrUpdateParameters";
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: CmafEncryption;

  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?: Array<HlsManifestCreateOrUpdateParameters>;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   *
   */
  SegmentDurationSeconds?: number;

  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   */
  SegmentPrefix?: string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace CmafPackageCreateOrUpdateParameters {
  export function isa(o: any): o is CmafPackageCreateOrUpdateParameters {
    return _smithy.isa(o, "CmafPackageCreateOrUpdateParameters");
  }
}

/**
 * A new Channel configuration.
 */
export interface CreateChannelRequest {
  __type?: "CreateChannelRequest";
  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * The ID of the Channel. The ID must be unique within the region and it
   * cannot be changed after a Channel is created.
   *
   */
  Id: string | undefined;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace CreateChannelRequest {
  export function isa(o: any): o is CreateChannelRequest {
    return _smithy.isa(o, "CreateChannelRequest");
  }
}

export interface CreateChannelResponse extends $MetadataBearer {
  __type?: "CreateChannelResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace CreateChannelResponse {
  export function isa(o: any): o is CreateChannelResponse {
    return _smithy.isa(o, "CreateChannelResponse");
  }
}

/**
 * Configuration parameters used to create a new HarvestJob.
 */
export interface CreateHarvestJobRequest {
  __type?: "CreateHarvestJobRequest";
  /**
   * The end of the time-window which will be harvested
   *
   */
  EndTime: string | undefined;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted
   *
   */
  Id: string | undefined;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   *
   */
  OriginEndpointId: string | undefined;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   *
   */
  S3Destination: S3Destination | undefined;

  /**
   * The start of the time-window which will be harvested
   *
   */
  StartTime: string | undefined;
}

export namespace CreateHarvestJobRequest {
  export function isa(o: any): o is CreateHarvestJobRequest {
    return _smithy.isa(o, "CreateHarvestJobRequest");
  }
}

export interface CreateHarvestJobResponse extends $MetadataBearer {
  __type?: "CreateHarvestJobResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   *
   */
  Arn?: string;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   *
   */
  ChannelId?: string;

  /**
   * The time the HarvestJob was submitted
   *
   */
  CreatedAt?: string;

  /**
   * The end of the time-window which will be harvested.
   *
   */
  EndTime?: string;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   *
   */
  Id?: string;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   *
   */
  OriginEndpointId?: string;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   *
   */
  S3Destination?: S3Destination;

  /**
   * The start of the time-window which will be harvested.
   *
   */
  StartTime?: string;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   *
   */
  Status?: Status | string;
}

export namespace CreateHarvestJobResponse {
  export function isa(o: any): o is CreateHarvestJobResponse {
    return _smithy.isa(o, "CreateHarvestJobResponse");
  }
}

/**
 * Configuration parameters used to create a new OriginEndpoint.
 */
export interface CreateOriginEndpointRequest {
  __type?: "CreateOriginEndpointRequest";
  /**
   * The ID of the Channel that the OriginEndpoint will be associated with.
   * This cannot be changed after the OriginEndpoint is created.
   *
   */
  ChannelId: string | undefined;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackageCreateOrUpdateParameters;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.  The ID must be unique within the region
   * and it cannot be changed after the OriginEndpoint is created.
   *
   */
  Id: string | undefined;

  /**
   * A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   *
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   *
   */
  TimeDelaySeconds?: number;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string>;
}

export namespace CreateOriginEndpointRequest {
  export function isa(o: any): o is CreateOriginEndpointRequest {
    return _smithy.isa(o, "CreateOriginEndpointRequest");
  }
}

export interface CreateOriginEndpointResponse extends $MetadataBearer {
  __type?: "CreateOriginEndpointResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   *
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   *
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string>;
}

export namespace CreateOriginEndpointResponse {
  export function isa(o: any): o is CreateOriginEndpointResponse {
    return _smithy.isa(o, "CreateOriginEndpointResponse");
  }
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 */
export interface DashEncryption {
  __type?: "DashEncryption";
  /**
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace DashEncryption {
  export function isa(o: any): o is DashEncryption {
    return _smithy.isa(o, "DashEncryption");
  }
}

/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface DashPackage {
  __type?: "DashPackage";
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   *
   */
  AdTriggers?: Array<__AdTriggersElement | string>;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   *
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: DashEncryption;

  /**
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   */
  ManifestLayout?: ManifestLayout | string;

  /**
   * Time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;

  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;

  /**
   * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
   */
  MinUpdatePeriodSeconds?: number;

  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
   * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
   * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
   * the Channel source contains SCTE-35 ad markers.
   *
   */
  PeriodTriggers?: Array<__PeriodTriggersElement | string>;

  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: Profile | string;

  /**
   * Duration (in seconds) of each segment. Actual segments will be
   * rounded to the nearest multiple of the source segment duration.
   *
   */
  SegmentDurationSeconds?: number;

  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   */
  SegmentTemplateFormat?: SegmentTemplateFormat | string;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

  /**
   * Duration (in seconds) to delay live content before presentation.
   */
  SuggestedPresentationDelaySeconds?: number;
}

export namespace DashPackage {
  export function isa(o: any): o is DashPackage {
    return _smithy.isa(o, "DashPackage");
  }
}

export interface DeleteChannelRequest {
  __type?: "DeleteChannelRequest";
  /**
   * The ID of the Channel to delete.
   */
  Id: string | undefined;
}

export namespace DeleteChannelRequest {
  export function isa(o: any): o is DeleteChannelRequest {
    return _smithy.isa(o, "DeleteChannelRequest");
  }
}

export interface DeleteChannelResponse extends $MetadataBearer {
  __type?: "DeleteChannelResponse";
}

export namespace DeleteChannelResponse {
  export function isa(o: any): o is DeleteChannelResponse {
    return _smithy.isa(o, "DeleteChannelResponse");
  }
}

export interface DeleteOriginEndpointRequest {
  __type?: "DeleteOriginEndpointRequest";
  /**
   * The ID of the OriginEndpoint to delete.
   */
  Id: string | undefined;
}

export namespace DeleteOriginEndpointRequest {
  export function isa(o: any): o is DeleteOriginEndpointRequest {
    return _smithy.isa(o, "DeleteOriginEndpointRequest");
  }
}

export interface DeleteOriginEndpointResponse extends $MetadataBearer {
  __type?: "DeleteOriginEndpointResponse";
}

export namespace DeleteOriginEndpointResponse {
  export function isa(o: any): o is DeleteOriginEndpointResponse {
    return _smithy.isa(o, "DeleteOriginEndpointResponse");
  }
}

export interface DescribeChannelRequest {
  __type?: "DescribeChannelRequest";
  /**
   * The ID of a Channel.
   */
  Id: string | undefined;
}

export namespace DescribeChannelRequest {
  export function isa(o: any): o is DescribeChannelRequest {
    return _smithy.isa(o, "DescribeChannelRequest");
  }
}

export interface DescribeChannelResponse extends $MetadataBearer {
  __type?: "DescribeChannelResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeChannelResponse {
  export function isa(o: any): o is DescribeChannelResponse {
    return _smithy.isa(o, "DescribeChannelResponse");
  }
}

export interface DescribeHarvestJobRequest {
  __type?: "DescribeHarvestJobRequest";
  /**
   * The ID of the HarvestJob.
   */
  Id: string | undefined;
}

export namespace DescribeHarvestJobRequest {
  export function isa(o: any): o is DescribeHarvestJobRequest {
    return _smithy.isa(o, "DescribeHarvestJobRequest");
  }
}

export interface DescribeHarvestJobResponse extends $MetadataBearer {
  __type?: "DescribeHarvestJobResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   *
   */
  Arn?: string;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   *
   */
  ChannelId?: string;

  /**
   * The time the HarvestJob was submitted
   *
   */
  CreatedAt?: string;

  /**
   * The end of the time-window which will be harvested.
   *
   */
  EndTime?: string;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   *
   */
  Id?: string;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   *
   */
  OriginEndpointId?: string;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   *
   */
  S3Destination?: S3Destination;

  /**
   * The start of the time-window which will be harvested.
   *
   */
  StartTime?: string;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   *
   */
  Status?: Status | string;
}

export namespace DescribeHarvestJobResponse {
  export function isa(o: any): o is DescribeHarvestJobResponse {
    return _smithy.isa(o, "DescribeHarvestJobResponse");
  }
}

export interface DescribeOriginEndpointRequest {
  __type?: "DescribeOriginEndpointRequest";
  /**
   * The ID of the OriginEndpoint.
   */
  Id: string | undefined;
}

export namespace DescribeOriginEndpointRequest {
  export function isa(o: any): o is DescribeOriginEndpointRequest {
    return _smithy.isa(o, "DescribeOriginEndpointRequest");
  }
}

export interface DescribeOriginEndpointResponse extends $MetadataBearer {
  __type?: "DescribeOriginEndpointResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   *
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   *
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string>;
}

export namespace DescribeOriginEndpointResponse {
  export function isa(o: any): o is DescribeOriginEndpointResponse {
    return _smithy.isa(o, "DescribeOriginEndpointResponse");
  }
}

export enum EncryptionMethod {
  AES_128 = "AES_128",
  SAMPLE_AES = "SAMPLE_AES"
}

/**
 * The client is not authorized to access the requested resource.
 */
export interface ForbiddenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ForbiddenException";
  $fault: "client";
  Message?: string;
}

export namespace ForbiddenException {
  export function isa(o: any): o is ForbiddenException {
    return _smithy.isa(o, "ForbiddenException");
  }
}

/**
 * A HarvestJob resource configuration
 */
export interface HarvestJob {
  __type?: "HarvestJob";
  /**
   * The Amazon Resource Name (ARN) assigned to the HarvestJob.
   *
   */
  Arn?: string;

  /**
   * The ID of the Channel that the HarvestJob will harvest from.
   *
   */
  ChannelId?: string;

  /**
   * The time the HarvestJob was submitted
   *
   */
  CreatedAt?: string;

  /**
   * The end of the time-window which will be harvested.
   *
   */
  EndTime?: string;

  /**
   * The ID of the HarvestJob. The ID must be unique within the region
   * and it cannot be changed after the HarvestJob is submitted.
   *
   */
  Id?: string;

  /**
   * The ID of the OriginEndpoint that the HarvestJob will harvest from.
   * This cannot be changed after the HarvestJob is submitted.
   *
   */
  OriginEndpointId?: string;

  /**
   * Configuration parameters for where in an S3 bucket to place the harvested content
   *
   */
  S3Destination?: S3Destination;

  /**
   * The start of the time-window which will be harvested.
   *
   */
  StartTime?: string;

  /**
   * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
   * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
   * include an explanation of why the HarvestJob failed.
   *
   */
  Status?: Status | string;
}

export namespace HarvestJob {
  export function isa(o: any): o is HarvestJob {
    return _smithy.isa(o, "HarvestJob");
  }
}

/**
 * An HTTP Live Streaming (HLS) encryption configuration.
 */
export interface HlsEncryption {
  __type?: "HlsEncryption";
  /**
   * A constant initialization vector for encryption (optional).
   * When not specified the initialization vector will be periodically rotated.
   *
   */
  ConstantInitializationVector?: string;

  /**
   * The encryption method to use.
   */
  EncryptionMethod?: EncryptionMethod | string;

  /**
   * Interval (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;

  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace HlsEncryption {
  export function isa(o: any): o is HlsEncryption {
    return _smithy.isa(o, "HlsEncryption");
  }
}

/**
 * An HTTP Live Streaming (HLS) ingest resource configuration.
 */
export interface HlsIngest {
  __type?: "HlsIngest";
  /**
   * A list of endpoints to which the source stream should be sent.
   */
  IngestEndpoints?: Array<IngestEndpoint>;
}

export namespace HlsIngest {
  export function isa(o: any): o is HlsIngest {
    return _smithy.isa(o, "HlsIngest");
  }
}

/**
 * A HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifest {
  __type?: "HlsManifest";
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   *
   */
  AdMarkers?: AdMarkers | string;

  /**
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   */
  Id: string | undefined;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   */
  ManifestName?: string;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   *
   */
  PlaylistType?: PlaylistType | string;

  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
   * inserted into manifests. Additionally, when an interval is specified
   * ID3Timed Metadata messages will be generated every 5 seconds using the
   * ingest time of the content.
   * If the interval is not specified, or set to 0, then
   * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
   * ID3Timed Metadata messages will be generated. Note that irrespective
   * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
   * it will be passed through to HLS output.
   *
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;
}

export namespace HlsManifest {
  export function isa(o: any): o is HlsManifest {
    return _smithy.isa(o, "HlsManifest");
  }
}

/**
 * A HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifestCreateOrUpdateParameters {
  __type?: "HlsManifestCreateOrUpdateParameters";
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   *
   */
  AdMarkers?: AdMarkers | string;

  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   *
   */
  AdTriggers?: Array<__AdTriggersElement | string>;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   *
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;

  /**
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   */
  Id: string | undefined;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   */
  ManifestName?: string;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   *
   */
  PlaylistType?: PlaylistType | string;

  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
   * inserted into manifests. Additionally, when an interval is specified
   * ID3Timed Metadata messages will be generated every 5 seconds using the
   * ingest time of the content.
   * If the interval is not specified, or set to 0, then
   * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
   * ID3Timed Metadata messages will be generated. Note that irrespective
   * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
   * it will be passed through to HLS output.
   *
   */
  ProgramDateTimeIntervalSeconds?: number;
}

export namespace HlsManifestCreateOrUpdateParameters {
  export function isa(o: any): o is HlsManifestCreateOrUpdateParameters {
    return _smithy.isa(o, "HlsManifestCreateOrUpdateParameters");
  }
}

/**
 * An HTTP Live Streaming (HLS) packaging configuration.
 */
export interface HlsPackage {
  __type?: "HlsPackage";
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   *
   */
  AdMarkers?: AdMarkers | string;

  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   *
   */
  AdTriggers?: Array<__AdTriggersElement | string>;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   *
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;

  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: HlsEncryption;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   *
   */
  PlaylistType?: PlaylistType | string;

  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
   * inserted into manifests. Additionally, when an interval is specified
   * ID3Timed Metadata messages will be generated every 5 seconds using the
   * ingest time of the content.
   * If the interval is not specified, or set to 0, then
   * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
   * ID3Timed Metadata messages will be generated. Note that irrespective
   * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
   * it will be passed through to HLS output.
   *
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   *
   */
  SegmentDurationSeconds?: number;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;

  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;
}

export namespace HlsPackage {
  export function isa(o: any): o is HlsPackage {
    return _smithy.isa(o, "HlsPackage");
  }
}

/**
 * An endpoint for ingesting source content for a Channel.
 */
export interface IngestEndpoint {
  __type?: "IngestEndpoint";
  /**
   * The system generated unique identifier for the IngestEndpoint
   */
  Id?: string;

  /**
   * The system generated password for ingest authentication.
   */
  Password?: string;

  /**
   * The ingest URL to which the source stream should be sent.
   */
  Url?: string;

  /**
   * The system generated username for ingest authentication.
   */
  Username?: string;
}

export namespace IngestEndpoint {
  export function isa(o: any): o is IngestEndpoint {
    return _smithy.isa(o, "IngestEndpoint");
  }
}

/**
 * An unexpected error occurred.
 */
export interface InternalServerErrorException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export function isa(o: any): o is InternalServerErrorException {
    return _smithy.isa(o, "InternalServerErrorException");
  }
}

export interface ListChannelsRequest {
  __type?: "ListChannelsRequest";
  /**
   * Upper bound on number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

export namespace ListChannelsRequest {
  export function isa(o: any): o is ListChannelsRequest {
    return _smithy.isa(o, "ListChannelsRequest");
  }
}

export interface ListChannelsResponse extends $MetadataBearer {
  __type?: "ListChannelsResponse";
  /**
   * A list of Channel records.
   */
  Channels?: Array<Channel>;

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

export namespace ListChannelsResponse {
  export function isa(o: any): o is ListChannelsResponse {
    return _smithy.isa(o, "ListChannelsResponse");
  }
}

export interface ListHarvestJobsRequest {
  __type?: "ListHarvestJobsRequest";
  /**
   * When specified, the request will return only HarvestJobs associated with the given Channel ID.
   */
  IncludeChannelId?: string;

  /**
   * When specified, the request will return only HarvestJobs in the given status.
   */
  IncludeStatus?: string;

  /**
   * The upper bound on the number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

export namespace ListHarvestJobsRequest {
  export function isa(o: any): o is ListHarvestJobsRequest {
    return _smithy.isa(o, "ListHarvestJobsRequest");
  }
}

export interface ListHarvestJobsResponse extends $MetadataBearer {
  __type?: "ListHarvestJobsResponse";
  /**
   * A list of HarvestJob records.
   */
  HarvestJobs?: Array<HarvestJob>;

  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;
}

export namespace ListHarvestJobsResponse {
  export function isa(o: any): o is ListHarvestJobsResponse {
    return _smithy.isa(o, "ListHarvestJobsResponse");
  }
}

export interface ListOriginEndpointsRequest {
  __type?: "ListOriginEndpointsRequest";
  /**
   * When specified, the request will return only OriginEndpoints associated with the given Channel ID.
   */
  ChannelId?: string;

  /**
   * The upper bound on the number of records to return.
   */
  MaxResults?: number;

  /**
   * A token used to resume pagination from the end of a previous request.
   */
  NextToken?: string;
}

export namespace ListOriginEndpointsRequest {
  export function isa(o: any): o is ListOriginEndpointsRequest {
    return _smithy.isa(o, "ListOriginEndpointsRequest");
  }
}

export interface ListOriginEndpointsResponse extends $MetadataBearer {
  __type?: "ListOriginEndpointsResponse";
  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of OriginEndpoint records.
   */
  OriginEndpoints?: Array<OriginEndpoint>;
}

export namespace ListOriginEndpointsResponse {
  export function isa(o: any): o is ListOriginEndpointsResponse {
    return _smithy.isa(o, "ListOriginEndpointsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse extends $MetadataBearer {
  __type?: "ListTagsForResourceResponse";
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return _smithy.isa(o, "ListTagsForResourceResponse");
  }
}

export enum ManifestLayout {
  COMPACT = "COMPACT",
  FULL = "FULL"
}

/**
 * A Microsoft Smooth Streaming (MSS) encryption configuration.
 */
export interface MssEncryption {
  __type?: "MssEncryption";
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

export namespace MssEncryption {
  export function isa(o: any): o is MssEncryption {
    return _smithy.isa(o, "MssEncryption");
  }
}

/**
 * A Microsoft Smooth Streaming (MSS) packaging configuration.
 */
export interface MssPackage {
  __type?: "MssPackage";
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: MssEncryption;

  /**
   * The time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;

  /**
   * The duration (in seconds) of each segment.
   */
  SegmentDurationSeconds?: number;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
}

export namespace MssPackage {
  export function isa(o: any): o is MssPackage {
    return _smithy.isa(o, "MssPackage");
  }
}

/**
 * The requested resource does not exist.
 */
export interface NotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return _smithy.isa(o, "NotFoundException");
  }
}

/**
 * An OriginEndpoint resource configuration.
 */
export interface OriginEndpoint {
  __type?: "OriginEndpoint";
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   *
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   *
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string>;
}

export namespace OriginEndpoint {
  export function isa(o: any): o is OriginEndpoint {
    return _smithy.isa(o, "OriginEndpoint");
  }
}

export enum Origination {
  ALLOW = "ALLOW",
  DENY = "DENY"
}

export enum PlaylistType {
  EVENT = "EVENT",
  NONE = "NONE",
  VOD = "VOD"
}

export enum Profile {
  HBBTV_1_5 = "HBBTV_1_5",
  NONE = "NONE"
}

export interface RotateChannelCredentialsRequest {
  __type?: "RotateChannelCredentialsRequest";
  /**
   * The ID of the channel to update.
   */
  Id: string | undefined;
}

export namespace RotateChannelCredentialsRequest {
  export function isa(o: any): o is RotateChannelCredentialsRequest {
    return _smithy.isa(o, "RotateChannelCredentialsRequest");
  }
}

export interface RotateChannelCredentialsResponse extends $MetadataBearer {
  __type?: "RotateChannelCredentialsResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace RotateChannelCredentialsResponse {
  export function isa(o: any): o is RotateChannelCredentialsResponse {
    return _smithy.isa(o, "RotateChannelCredentialsResponse");
  }
}

export interface RotateIngestEndpointCredentialsRequest {
  __type?: "RotateIngestEndpointCredentialsRequest";
  /**
   * The ID of the channel the IngestEndpoint is on.
   */
  Id: string | undefined;

  /**
   * The id of the IngestEndpoint whose credentials should be rotated
   */
  IngestEndpointId: string | undefined;
}

export namespace RotateIngestEndpointCredentialsRequest {
  export function isa(o: any): o is RotateIngestEndpointCredentialsRequest {
    return _smithy.isa(o, "RotateIngestEndpointCredentialsRequest");
  }
}

export interface RotateIngestEndpointCredentialsResponse
  extends $MetadataBearer {
  __type?: "RotateIngestEndpointCredentialsResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace RotateIngestEndpointCredentialsResponse {
  export function isa(o: any): o is RotateIngestEndpointCredentialsResponse {
    return _smithy.isa(o, "RotateIngestEndpointCredentialsResponse");
  }
}

/**
 * Configuration parameters for where in an S3 bucket to place the harvested content
 *
 */
export interface S3Destination {
  __type?: "S3Destination";
  /**
   * The name of an S3 bucket within which harvested content will be exported
   *
   */
  BucketName: string | undefined;

  /**
   * The key in the specified S3 bucket where the harvested top-level manifest will be placed.
   *
   */
  ManifestKey: string | undefined;

  /**
   * The IAM role used to write to the specified S3 bucket
   *
   */
  RoleArn: string | undefined;
}

export namespace S3Destination {
  export function isa(o: any): o is S3Destination {
    return _smithy.isa(o, "S3Destination");
  }
}

export enum SegmentTemplateFormat {
  NUMBER_WITH_DURATION = "NUMBER_WITH_DURATION",
  NUMBER_WITH_TIMELINE = "NUMBER_WITH_TIMELINE",
  TIME_WITH_TIMELINE = "TIME_WITH_TIMELINE"
}

/**
 * An unexpected error occurred.
 */
export interface ServiceUnavailableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return _smithy.isa(o, "ServiceUnavailableException");
  }
}

/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 */
export interface SpekeKeyProvider {
  __type?: "SpekeKeyProvider";
  /**
   * An Amazon Resource Name (ARN) of a Certificate Manager certificate
   * that MediaPackage will use for enforcing secure end-to-end data
   * transfer with the key provider service.
   *
   */
  CertificateArn?: string;

  /**
   * The resource ID to include in key requests.
   */
  ResourceId: string | undefined;

  /**
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
   * MediaPackage will assume when accessing the key provider service.
   *
   */
  RoleArn: string | undefined;

  /**
   * The system IDs to include in key requests.
   */
  SystemIds: Array<string> | undefined;

  /**
   * The URL of the external key provider service.
   */
  Url: string | undefined;
}

export namespace SpekeKeyProvider {
  export function isa(o: any): o is SpekeKeyProvider {
    return _smithy.isa(o, "SpekeKeyProvider");
  }
}

export enum Status {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED"
}

export enum StreamOrder {
  ORIGINAL = "ORIGINAL",
  VIDEO_BITRATE_ASCENDING = "VIDEO_BITRATE_ASCENDING",
  VIDEO_BITRATE_DESCENDING = "VIDEO_BITRATE_DESCENDING"
}

/**
 * A StreamSelection configuration.
 */
export interface StreamSelection {
  __type?: "StreamSelection";
  /**
   * The maximum video bitrate (bps) to include in output.
   */
  MaxVideoBitsPerSecond?: number;

  /**
   * The minimum video bitrate (bps) to include in output.
   */
  MinVideoBitsPerSecond?: number;

  /**
   * A directive that determines the order of streams in the output.
   */
  StreamOrder?: StreamOrder | string;
}

export namespace StreamSelection {
  export function isa(o: any): o is StreamSelection {
    return _smithy.isa(o, "StreamSelection");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  ResourceArn: string | undefined;
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

/**
 * The client has exceeded their resource or throttling limits.
 */
export interface TooManyRequestsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return _smithy.isa(o, "TooManyRequestsException");
  }
}

/**
 * The parameters sent in the request are not valid.
 */
export interface UnprocessableEntityException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnprocessableEntityException";
  $fault: "client";
  Message?: string;
}

export namespace UnprocessableEntityException {
  export function isa(o: any): o is UnprocessableEntityException {
    return _smithy.isa(o, "UnprocessableEntityException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  ResourceArn: string | undefined;
  /**
   * The key(s) of tag to be deleted
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

/**
 * Configuration parameters used to update the Channel.
 */
export interface UpdateChannelRequest {
  __type?: "UpdateChannelRequest";
  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * The ID of the Channel to update.
   */
  Id: string | undefined;
}

export namespace UpdateChannelRequest {
  export function isa(o: any): o is UpdateChannelRequest {
    return _smithy.isa(o, "UpdateChannelRequest");
  }
}

export interface UpdateChannelResponse extends $MetadataBearer {
  __type?: "UpdateChannelResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the Channel.
   */
  Arn?: string;

  /**
   * A short text description of the Channel.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  HlsIngest?: HlsIngest;

  /**
   * The ID of the Channel.
   */
  Id?: string;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateChannelResponse {
  export function isa(o: any): o is UpdateChannelResponse {
    return _smithy.isa(o, "UpdateChannelResponse");
  }
}

/**
 * Configuration parameters used to update an existing OriginEndpoint.
 */
export interface UpdateOriginEndpointRequest {
  __type?: "UpdateOriginEndpointRequest";
  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackageCreateOrUpdateParameters;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint to update.
   */
  Id: string | undefined;

  /**
   * A short string that will be appended to the end of the Endpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   *
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (in seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * Amount of delay (in seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   *
   */
  TimeDelaySeconds?: number;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string>;
}

export namespace UpdateOriginEndpointRequest {
  export function isa(o: any): o is UpdateOriginEndpointRequest {
    return _smithy.isa(o, "UpdateOriginEndpointRequest");
  }
}

export interface UpdateOriginEndpointResponse extends $MetadataBearer {
  __type?: "UpdateOriginEndpointResponse";
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn?: string;

  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId?: string;

  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;

  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;

  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;

  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;

  /**
   * The ID of the OriginEndpoint.
   */
  Id?: string;

  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;

  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;

  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
   * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
   * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   *
   */
  Origination?: Origination | string;

  /**
   * Maximum duration (seconds) of content to retain for startover playback.
   * If not specified, startover playback will be disabled for the OriginEndpoint.
   *
   */
  StartoverWindowSeconds?: number;

  /**
   * A collection of tags associated with a resource
   */
  Tags?: { [key: string]: string };

  /**
   * Amount of delay (seconds) to enforce on the playback of live content.
   * If not specified, there will be no time delay in effect for the OriginEndpoint.
   *
   */
  TimeDelaySeconds?: number;

  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;

  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: Array<string>;
}

export namespace UpdateOriginEndpointResponse {
  export function isa(o: any): o is UpdateOriginEndpointResponse {
    return _smithy.isa(o, "UpdateOriginEndpointResponse");
  }
}

export enum __AdTriggersElement {
  BREAK = "BREAK",
  DISTRIBUTOR_ADVERTISEMENT = "DISTRIBUTOR_ADVERTISEMENT",
  DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY = "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
  DISTRIBUTOR_PLACEMENT_OPPORTUNITY = "DISTRIBUTOR_PLACEMENT_OPPORTUNITY",
  PROVIDER_ADVERTISEMENT = "PROVIDER_ADVERTISEMENT",
  PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY = "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY",
  PROVIDER_PLACEMENT_OPPORTUNITY = "PROVIDER_PLACEMENT_OPPORTUNITY",
  SPLICE_INSERT = "SPLICE_INSERT"
}

export enum __PeriodTriggersElement {
  ADS = "ADS"
}