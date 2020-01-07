import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EventBridgeClient";
import { PutTargetsRequest, PutTargetsResponse } from "../models/index";
import {
  deserializeAws_json1_1PutTargetsCommand,
  serializeAws_json1_1PutTargetsCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type PutTargetsCommandInput = PutTargetsRequest;
export type PutTargetsCommandOutput = PutTargetsResponse;

export class PutTargetsCommand extends $Command<
  PutTargetsCommandInput,
  PutTargetsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutTargetsCommandInput, PutTargetsCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutTargetsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutTargetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PutTargetsCommandOutput> {
    return deserializeAws_json1_1PutTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
