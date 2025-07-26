export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB limit for S3 storage

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

async function uploadToS3(file: File, fileName: string): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  const objectKey = `resumes/${Date.now()}-${fileName}`;
  const bucketName = process.env.AWS_S3_BUCKET || 'edenic-resumes';
  
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: objectKey,
    Body: buffer,
    ContentType: file.type,
    Metadata: {
      originalName: fileName,
      uploadedAt: new Date().toISOString(),
    },
  });

  try {
    await s3Client.send(command);
    
    return `https://${bucketName}.s3.${process.env.AWS_REGION || 'us-east-1'}.amazonaws.com/${objectKey}`;
  } catch (error) {
    console.error('S3 upload error:', error);
    throw new Error(`Failed to upload file to S3: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    let hasFile = false;
    let fileUrl = '';
    let fileName = '';
    
    for (const [, value] of formData.entries()) {
      if (value instanceof File) {
        hasFile = true;
        fileName = value.name;
        
        if (value.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: 'File too large. Maximum size is 50MB.' },
            { status: 400 }
          );
        }
        
        try {
          fileUrl = await uploadToS3(value, value.name);
        } catch (uploadError) {
          console.error('S3 upload error:', uploadError);
          return NextResponse.json(
            { error: 'Failed to upload file. Please try again.' },
            { status: 500 }
          );
        }
      }
    }
    
    const emailData = {
      position: formData.get('position'),
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      cover_letter: formData.get('cover_letter'),
      resume_url: fileUrl,
      resume_filename: fileName
    };
    
    const response = await fetch('https://formspree.io/f/xeokvkvl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...emailData,
        _subject: hasFile ? 'Career Application with Resume' : 'Career Application'
      })
    });

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Application submitted successfully!'
      });
    } else {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { error: 'Failed to parse response' };
      }
      
      console.error('Email error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email notification', details: errorData },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Career form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 