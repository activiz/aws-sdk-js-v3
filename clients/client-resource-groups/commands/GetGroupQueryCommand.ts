import {
  ResourceGroupsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ResourceGroupsClient";
import { GetGroupQueryInput, GetGroupQueryOutput } from "../models/index";
import {
  deserializeAws_restJson1_1GetGroupQueryCommand,
  serializeAws_restJson1_1GetGroupQueryCommand
} from "../protocols/Aws_restJson1_1";
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

export type GetGroupQueryCommandInput = GetGroupQueryInput;
export type GetGroupQueryCommandOutput = GetGroupQueryOutput;

export class GetGroupQueryCommand extends $Command<
  GetGroupQueryCommandInput,
  GetGroupQueryCommandOutput,
  ResourceGroupsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGroupQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGroupQueryCommandInput, GetGroupQueryCommandOutput> {
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
    input: GetGroupQueryCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetGroupQueryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetGroupQueryCommandOutput> {
    return deserializeAws_restJson1_1GetGroupQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}