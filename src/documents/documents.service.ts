import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentsService {
  async saveCV(file: File) {
    const document = file;
    return document;
  }
}
