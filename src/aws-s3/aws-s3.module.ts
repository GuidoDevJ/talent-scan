import { Module } from '@nestjs/common';
import { ConfigsModule } from 'src/common/config.module';
import { AwsS3Service } from './aws-s3.service';

@Module({
  imports: [ConfigsModule],
  providers: [AwsS3Service],
  exports: [AwsS3Service],
})
export class AwsS3Module {}
