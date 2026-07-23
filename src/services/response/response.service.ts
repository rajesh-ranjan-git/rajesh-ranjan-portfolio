import "@/services/logger/logger";
import { NextRequest, NextResponse } from "next/server";
import { httpStatusConfig } from "@/config/http.config";
import { MODE } from "@/constants/env.constants";
import {
  ApiErrorResponseType,
  ApiSuccessResponseType,
  ResponseMetadataType,
  ErrorLogMetadataType,
  SuccessResponseOptionsType,
} from "@/types/types/api.types";
import { sanitizeData } from "@/utils/db.utils";
import { getDateToStore } from "@/utils/date.utils";
import AppError from "@/services/error/error.service";

class ResponseService {
  private getRequestMetadata(request: NextRequest): ResponseMetadataType {
    return {
      requestId: request.headers.get("x-request-id") ?? undefined,
      path: request.nextUrl.pathname,
      method: request.method,
    };
  }

  successResponseHandler<T = unknown>(
    request: NextRequest,
    {
      status = httpStatusConfig.success.message,
      statusCode = httpStatusConfig.success.statusCode,
      message = null,
      data = null,
    }: SuccessResponseOptionsType<T> = {},
  ): NextResponse<ApiSuccessResponseType<T | null>> {
    const payload: ApiSuccessResponseType<T | null> = {
      success: true,
      status,
      statusCode,
      message,
      data: sanitizeData(data) as T | null,
      timestamp: getDateToStore(new Date()),
      metadata:
        MODE === "development" ? this.getRequestMetadata(request) : null,
    };

    return NextResponse.json(payload, { status: statusCode });
  }

  errorResponseHandler(
    error: unknown,
    request: NextRequest,
  ): NextResponse<ApiErrorResponseType> {
    const rawMessage = error instanceof Error ? error.message : "";
    const isMalformedJsonError =
      rawMessage.startsWith("Unexpected token") ||
      rawMessage.startsWith("Expected");

    const appError = isMalformedJsonError
      ? AppError.badRequest({
          message: "Please provide a valid input!",
          code: "INVALID_REQUEST_BODY",
          path: request.nextUrl.pathname,
          isOperational: true,
        })
      : AppError.from(error, { path: request.nextUrl.pathname });

    const logMetadata: ErrorLogMetadataType = {
      ...this.getRequestMetadata(request),
      isOperational: appError.metadata.isOperational ?? false,
    };

    const errorResponse: ApiErrorResponseType = {
      success: false,
      status: appError.name,
      code: appError.code,
      statusCode: appError.statusCode,
      message: appError.message,
      details: appError.details,
      timestamp: appError.timestamp,
      metadata: MODE === "development" ? logMetadata : null,
    };

    logger.logAppError(appError, {
      ...errorResponse,
      metadata: logMetadata,
    });

    return NextResponse.json(errorResponse, { status: appError.statusCode });
  }
}

export const responseService = new ResponseService();
