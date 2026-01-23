import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(maxRequests: number = 100, windowMs: number = 60000) {
  return (request: NextRequest) => {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const now = Date.now()

    const limiter = rateLimitStore.get(ip)

    if (!limiter || now > limiter.resetTime) {
      rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
      return null
    }

    if (limiter.count >= maxRequests) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((limiter.resetTime - now) / 1000)) } }
      )
    }

    limiter.count++
    return null
  }
}

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export function errorHandler(error: any) {
  console.error('API Error:', error)

  if (error instanceof ApiError) {
    return NextResponse.json(
      { error: error.message, ...(error.details && { details: error.details }) },
      { status: error.statusCode }
    )
  }

  if (error.name === 'ZodError') {
    return NextResponse.json(
      { error: 'Validation failed', details: error.issues },
      { status: 400 }
    )
  }

  if (error.code === 'PGRST116') {
    return NextResponse.json(
      { error: 'Resource not found' },
      { status: 404 }
    )
  }

  if (error.code === 'PGRST204') {
    return NextResponse.json(
      { error: 'No content' },
      { status: 204 }
    )
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  )
}

export function successResponse(data: any, statusCode: number = 200) {
  return NextResponse.json(data, { status: statusCode })
}
