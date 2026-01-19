export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export interface ErrorLog {
  timestamp: string;
  severity: ErrorSeverity;
  message: string;
  code?: string;
  context?: Record<string, any>;
  stackTrace?: string;
  userId?: string;
  requestId?: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private formatLog(severity: ErrorSeverity, message: string, context?: Record<string, any>): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? JSON.stringify(context) : '';
    return `[${timestamp}] ${severity.toUpperCase()}: ${message} ${contextStr}`;
  }

  log(message: string, context?: Record<string, any>) {
    const formatted = this.formatLog(ErrorSeverity.LOW, message, context);
    console.log(formatted);
  }

  warn(message: string, context?: Record<string, any>) {
    const formatted = this.formatLog(ErrorSeverity.MEDIUM, message, context);
    console.warn(formatted);
  }

  error(message: string, context?: Record<string, any>, stackTrace?: string) {
    const formatted = this.formatLog(ErrorSeverity.HIGH, message, context);
    console.error(formatted);
    if (stackTrace && this.isDevelopment) {
      console.error(stackTrace);
    }
    
    // Send to monitoring service (Sentry, etc)
    // this.sendToMonitoring(ErrorSeverity.HIGH, message, context, stackTrace);
  }

  critical(message: string, context?: Record<string, any>, stackTrace?: string) {
    const formatted = this.formatLog(ErrorSeverity.CRITICAL, message, context);
    console.error(formatted);
    if (stackTrace) {
      console.error(stackTrace);
    }
    
    // Always send critical errors to monitoring
    // this.sendToMonitoring(ErrorSeverity.CRITICAL, message, context, stackTrace);
  }

  private sendToMonitoring(
    severity: ErrorSeverity,
    message: string,
    context?: Record<string, any>,
    stackTrace?: string
  ) {
    // Implement integration with Sentry, LogRocket, etc
    // Example:
    // if (process.env.SENTRY_DSN) {
    //   Sentry.captureException(new Error(message), {
    //     contexts: { custom: context },
    //     level: severity as any,
    //   });
    // }
  }
}

export const logger = new Logger();

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public context?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const errorHandler = {
  handle(error: any, context?: Record<string, any>) {
    if (error instanceof AppError) {
      logger.error(error.message, { ...error.context, ...context }, error.stack);
      return {
        error: error.message,
        code: error.code,
        statusCode: error.statusCode
      };
    }

    if (error instanceof Error) {
      logger.error(error.message, context, error.stack);
      return {
        error: 'An unexpected error occurred',
        code: 'INTERNAL_ERROR',
        statusCode: 500
      };
    }

    logger.critical('Unknown error occurred', { error, ...context });
    return {
      error: 'An unexpected error occurred',
      code: 'UNKNOWN_ERROR',
      statusCode: 500
    };
  },

  handleAsync: (fn: Function) => async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error) {
      return errorHandler.handle(error);
    }
  }
};
