import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsS3Module } from './aws-s3/aws-s3.module';
import { DocumentsModule } from './documents/documents.module';
import { MulterS3Module } from './multer/multer.module';

@Module({
  imports: [DocumentsModule, MulterS3Module, AwsS3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
