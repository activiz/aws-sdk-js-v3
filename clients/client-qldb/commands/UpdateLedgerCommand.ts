import {
  QLDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../QLDBClient";
import { UpdateLedgerRequest, UpdateLedgerResponse } from "../models/index";
import {
  deserializeAws_restJson1_1UpdateLedgerCommand,
  serializeAws_restJson1_1UpdateLedgerCommand
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

export type UpdateLedgerCommandInput = UpdateLedgerRequest;
export type UpdateLedgerCommandOutput = UpdateLedgerResponse;

export class UpdateLedgerCommand extends $Command<
  UpdateLedgerCommandInput,
  UpdateLedgerCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLedgerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLedgerCommandInput, UpdateLedgerCommandOutput> {
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
    input: UpdateLedgerCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateLedgerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateLedgerCommandOutput> {
    return deserializeAws_restJson1_1UpdateLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}