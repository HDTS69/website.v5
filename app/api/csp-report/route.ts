import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const report = await request.json();
    
    // Log CSP violations for monitoring
    console.error('CSP Violation:', {
      blockedUri: report['csp-report']?.['blocked-uri'],
      violatedDirective: report['csp-report']?.['violated-directive'],
      documentUri: report['csp-report']?.['document-uri'],
      originalPolicy: report['csp-report']?.['original-policy'],
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 204 });
  } catch (error) {
    console.error('Error processing CSP report:', error);
    return NextResponse.json({ error: 'Invalid report' }, { status: 400 });
  }
} 