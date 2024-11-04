
import { NextResponse } from 'next/server';

// Custom error class to handle both message and status code
export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Middleware to wrap API routes
export async function errorHandler(fn: any) {
  try {
    return await fn();
  } catch (error: any) {
    console.error('API Error:', error);
    const statusCode = error instanceof ApiError ? error.statusCode : 500;
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: statusCode });
  }
}

// Helper function to throw an API error
export function throwError(message: string, statusCode = 400) {
  throw new ApiError(message, statusCode);
}