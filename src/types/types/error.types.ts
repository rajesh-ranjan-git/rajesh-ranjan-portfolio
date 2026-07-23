export type AppErrorMetadataType = {
  path?: string | null;
  requestId?: string | null;
  isOperational?: boolean;
};

export type AppErrorOptionsType = {
  message?: string;
  code?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
  metadata?: AppErrorMetadataType;
};

export type AppErrorFactoryOptionsType = {
  message?: string;
  code?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
} & AppErrorMetadataType;

export type AppErrorJSONType = {
  error: {
    message: string;
    code: string;
    statusCode: number;
    details: Record<string, unknown>;
    timestamp: string;
    path?: string | null;
    requestId?: string | null;
  };
};
