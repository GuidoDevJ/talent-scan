import { Controller } from '@nestjs/common';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}
  saveCV(file: File) {
    return this.documentsService.saveCV(file);
  }
}
