/**
 * Structured Logging System
 * Enables production debugging and monitoring
 */

const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
} as const;

type LogLevel = keyof typeof LOG_LEVELS;

interface LogContext {
  [key: string]: unknown;
}

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: LogContext;
  error?: {
    message: string;
    code?: string;
    stack?: string;
  };
}

class Logger {
  private currentLevel: LogLevel;
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.currentLevel = (process.env.LOG_LEVEL as LogLevel) || 'info';
  }

  private formatLog(entry: LogEntry): string {
    const { level, message, timestamp, context, error } = entry;
    const contextStr = context ? JSON.stringify(context) : '';
    const errorStr = error ? JSON.stringify(error) : '';
    
    if (this.isDevelopment) {
      return `[${timestamp}] [${level.toUpperCase()}] ${message} ${contextStr} ${errorStr}`.trim();
    }

    return JSON.stringify(entry);
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] >= LOG_LEVELS[this.currentLevel];
  }

  private log(level: LogLevel, message: string, context?: LogContext, error?: Error | null): void {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      ...(context && Object.keys(context).length > 0 && { context }),
      ...(error && {
        error: {
          message: error.message,
          code: (error as any).code,
          stack: this.isDevelopment ? error.stack : undefined,
        },
      }),
    };

    const formatted = this.formatLog(entry);

    switch (level) {
      case 'debug':
        console.debug(formatted);
        break;
      case 'info':
        console.log(formatted);
        break;
      case 'warn':
        console.warn(formatted);
        break;
      case 'error':
        console.error(formatted);
        break;
    }

    // Send to monitoring service (Sentry, etc.) in production
    if (!this.isDevelopment && level === 'error') {
      this.sendToMonitoring(entry);
    }
  }

  private sendToMonitoring(entry: LogEntry): void {
    // Implement Sentry integration here in Phase 4
    // For now, this is a placeholder
    try {
      // Future: Send to Sentry or similar monitoring service
    } catch (err) {
      console.error('Failed to send log to monitoring:', err);
    }
  }

  debug(message: string, context?: LogContext): void {
    this.log('debug', message, context);
  }

  info(message: string, context?: LogContext): void {
    this.log('info', message, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log('warn', message, context);
  }

  error(message: string, error?: Error | null, context?: LogContext): void {
    this.log('error', message, context, error);
  }

  /**
   * Log API request
   */
  logRequest(method: string, path: string, context?: LogContext): void {
    this.info(`${method} ${path}`, context);
  }

  /**
   * Log API response
   */
  logResponse(method: string, path: string, statusCode: number, duration: number, context?: LogContext): void {
    this.info(`${method} ${path} ${statusCode} (${duration}ms)`, context);
  }

  /**
   * Log database operation
   */
  logDatabase(operation: string, table: string, duration: number, context?: LogContext): void {
    this.debug(`DB ${operation} ${table} (${duration}ms)`, context);
  }

  /**
   * Log auth event
   */
  logAuth(event: string, userId?: string, context?: LogContext): void {
    this.info(`AUTH ${event}${userId ? ` (${userId})` : ''}`, context);
  }

  /**
   * Log payment event
   */
  logPayment(event: string, userId: string, amount?: number, context?: LogContext): void {
    this.info(`PAYMENT ${event} user=${userId}${amount ? ` amount=${amount}` : ''}`, context);
  }
}

// Singleton instance
export const logger = new Logger();

export default logger;
