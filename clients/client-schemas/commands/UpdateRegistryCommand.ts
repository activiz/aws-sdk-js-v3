import { UpdateRegistryRequest, UpdateRegistryResponse } from "../models/index";
import {
  deserializeAws_restJson1_1UpdateRegistryCommand,
  serializeAws_restJson1_1UpdateRegistryCommand
} from "../protocols/Aws_restJson1_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  schemasClientResolvedConfig
} from "../schemasClient";
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

export type UpdateRegistryCommandInput = UpdateRegistryRequest;
export type UpdateRegistryCommandOutput = UpdateRegistryResponse;

export class UpdateRegistryCommand extends $Command<
  UpdateRegistryCommandInput,
  UpdateRegistryCommandOutput,
  schemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRegistryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: schemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRegistryCommandInput, UpdateRegistryCommandOutput> {
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
    input: UpdateRegistryCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateRegistryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateRegistryCommandOutput> {
    return deserializeAws_restJson1_1UpdateRegistryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}