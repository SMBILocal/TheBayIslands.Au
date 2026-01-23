import { NextRequest, NextResponse } from 'next/server';

/**
 * Toggle indexing status
 * This endpoint helps manage the NEXT_PUBLIC_ALLOW_INDEXING environment variable
 * In production, this would update a database or environment config
 */
export async function POST(request: NextRequest) {
  try {
    const { enabled } = await request.json();

    // In production, you would:
    // 1. Update a database setting
    // 2. Or trigger a redeployment with new env vars
    // 3. Or update a configuration service

    console.log(`[SEO] Indexing toggled: ${enabled ? 'ENABLED' : 'DISABLED'}`);

    // For now, just log and return success
    return NextResponse.json({
      success: true,
      message: `Indexing ${enabled ? 'enabled' : 'disabled'}`,
      note: 'Changes will take effect after next build/deployment',
      steps: [
        '1. Update NEXT_PUBLIC_ALLOW_INDEXING in .env.local or deployment config',
        `2. Current status: ${enabled ? 'ENABLED' : 'DISABLED'}`,
        '3. Re-deploy application for robots.txt to update',
      ],
    });
  } catch (error) {
    console.error('[SEO] Error toggling indexing:', error);
    return NextResponse.json({ error: 'Failed to toggle indexing' }, { status: 500 });
  }
}
