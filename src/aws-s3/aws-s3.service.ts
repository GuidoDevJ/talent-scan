import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AwsS3Service {
  private s3: S3Client;
  private bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3Client({
      region: this.configService.getOrThrow<string>('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.getOrThrow<string>('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.getOrThrow<string>(
          'AWS_SECRET_ACCESS_KEY',
        ),
      },
    });

    this.bucketName = this.configService.getOrThrow<string>('AWS_BUCKET_NAME');
  }

  async uploadFile(file: Express.Multer.File) {
    try {
      const uploadParams = {
        Bucket: this.bucketName,
        Key: `cv/${Date.now()}-${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      await this.s3.send(new PutObjectCommand(uploadParams));

      return {
        url: `https://${this.bucketName}.s3.amazonaws.com/${uploadParams.Key}`,
      };
    } catch (error) {
      console.error('Error uploading file to S3:', error);
      throw new Error('File upload failed');
    }
  }
}
