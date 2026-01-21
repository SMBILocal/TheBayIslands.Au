/**
 * Standardized API Response Format
 * Ensures consistent response structure across all endpoints
 */

import type { AppError } from './errors';

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  message: string;
  data: T;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    statusCode: number;
    details?: unknown;
    stack?: string;
  };
  timestamp: string;
}

export interface PaginatedResponse<T> {
  success: true;
  message: string;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  timestamp: string;
}

export const apiResponse = {
  /**
   * Successful response
   */
  success<T>(data: T, message = 'Success'): ApiSuccessResponse<T> {
    return {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  },

  /**
   * Paginated successful response
   */
  paginated<T>(
    data: T[],
    page: number,
    limit: number,
    total: number,
    message = 'Success'
  ): PaginatedResponse<T> {
    const totalPages = Math.ceil(total / limit);
    return {
      success: true,
      message,
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
      timestamp: new Date().toISOString(),
    };
  },

  /**
   * Error response
   */
  error(error: AppError | Error): ApiErrorResponse {
    if ('code' in error && 'statusCode' in error) {
      return {
        success: false,
        error: {
          code: (error as AppError).code,
          message: error.message,
          statusCode: (error as AppError).statusCode,
          ...(process.env.NODE_ENV === 'development' && {
            details: (error as AppError).details,
            stack: error.stack,
          }),
        },
        timestamp: new Date().toISOString(),
      };
    }

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: error.message || 'An unknown error occurred',
        statusCode: 500,
        ...(process.env.NODE_ENV === 'development' && {
          stack: error.stack,
        }),
      },
      timestamp: new Date().toISOString(),
    };
  },

  /**
   * Created response (201)
   */
  created<T>(data: T, message = 'Created successfully'): ApiSuccessResponse<T> {
    return {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  },

  /**
   * Updated response
   */
  updated<T>(data: T, message = 'Updated successfully'): ApiSuccessResponse<T> {
    return {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  },

  /**
   * Deleted response
   */
  deleted(message = 'Deleted successfully'): ApiSuccessResponse<{ deleted: true }> {
    return {
      success: true,
      message,
      data: { deleted: true },
      timestamp: new Date().toISOString(),
    };
  },

  /**
   * No content response
   */
  noContent(message = 'No content'): ApiSuccessResponse<null> {
    return {
      success: true,
      message,
      data: null,
      timestamp: new Date().toISOString(),
    };
  },
};
