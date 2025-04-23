import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const violation = await request.json()

  // Log CSP violations (you might want to use a proper logging service in production)
  console.error('CSP Violation:', violation)

  return new NextResponse(null, { status: 204 })
}

export async function GET() {
  return new NextResponse('Method not allowed', { status: 405 })
}
