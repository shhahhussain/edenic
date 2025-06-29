# AWS S3 File Upload Setup

## Overview
Enterprise-grade file upload solution using AWS S3 for reliable resume uploads.

## Features
- ✅ **50MB file limit** - Handle large PDFs and documents
- ✅ **Secure storage** - Private S3 bucket with IAM authentication
- ✅ **Cost-effective** - ~$0.23/month for 1000 uploads
- ✅ **Industry standard** - AWS S3 with official SDK
- ✅ **Automatic email notifications** - Get notified of new applications

## Quick Setup

### 1. Create S3 Bucket
```bash
# AWS Console → S3 → Create bucket
Bucket name: edenic-resumes
Region: us-east-1
Block Public Access: Enabled (default)
```

### 2. Create IAM User
```bash
# AWS Console → IAM → Users → Create user
Username: edenic-s3-upload
Permissions: AmazonS3FullAccess
```

### 3. Get Access Keys
```bash
# IAM User → Security credentials → Create access key
# Save: Access Key ID & Secret Access Key
```

### 4. Environment Variables
Create `.env.local`:
```env
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=edenic-resumes
```

## How It Works

```
User Upload → Next.js API → AWS S3 → Email Notification
```

1. **User submits form** with resume file
2. **API uploads file** to S3 bucket
3. **API sends email** with form data + file link
4. **You receive notification** with all details

## File Structure
```
edenic-resumes/
├── resumes/
│   ├── 1735489200000-Shah-Hussain-CV.pdf
│   ├── 1735489300000-John-Doe-Resume.pdf
│   └── ...
```

## Security

### IAM Policy (Recommended)
Instead of `AmazonS3FullAccess`, use this custom policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::edenic-resumes/*"
    }
  ]
}
```

### Security Features
- **Private bucket** - Files not publicly accessible
- **IAM authentication** - Secure access control
- **Metadata tracking** - Original filename and upload time
- **Timestamped filenames** - No conflicts

## Costs

| Service | Cost | Monthly (1000 uploads) |
|---------|------|------------------------|
| Storage | $0.023/GB | $0.046 |
| Transfer | $0.09/GB | $0.18 |
| API Calls | $0.0004/1K requests | $0.004 |
| **Total** | | **$0.23** |

*Based on 2MB average file size*

## Testing

### Local Development
```bash
npm run dev
# Upload file via career form
# Check console logs for S3 upload status
```

### Production Deployment
1. Set environment variables in hosting platform
2. Test file uploads in production
3. Monitor AWS costs via Cost Explorer

## Troubleshooting

### Common Issues
| Error | Solution |
|-------|----------|
| Access Denied | Check IAM permissions |
| Bucket not found | Verify bucket name/region |
| Invalid credentials | Check access keys |

### Debug Logs
The API provides detailed logging:
- File upload progress
- S3 response status
- Email notification status

## Best Practices

### Security
- Use IAM roles in production (not access keys)
- Enable S3 versioning for file recovery
- Set up CloudTrail for audit logging

### Cost Optimization
- Set lifecycle policies to delete old files
- Monitor usage with AWS Cost Explorer
- Use S3 Intelligent Tiering for cost savings

### Performance
- Files are uploaded directly to S3
- No intermediate storage or processing
- Automatic retry on network issues

## API Endpoints

### POST /api/career
Handles career form submissions with file uploads.

**Request:**
- `multipart/form-data` with file and form fields

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully!"
}
```

**Error Response:**
```json
{
  "error": "File too large. Maximum size is 50MB."
}
```

## File Upload Limits

| Type | Limit |
|------|-------|
| File Size | 50MB |
| File Types | PDF, DOC, DOCX |
| Concurrent Uploads | Unlimited |
| Storage Duration | Configurable |

## Monitoring

### AWS CloudWatch
- Monitor S3 API calls
- Track storage usage
- Set up cost alerts

### Application Logs
- File upload success/failure
- Email notification status
- Error details for debugging

