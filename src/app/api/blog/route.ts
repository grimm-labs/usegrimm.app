import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

export async function GET(request: NextRequest) {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}