import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumetsModule } from './documets/documets.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [DocumetsModule, DocumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
