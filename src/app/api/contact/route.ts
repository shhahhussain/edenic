import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const response = await fetch('https://formspree.io/f/xeokvkvl', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Submission failed', details: errorData },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 