import { Injectable } from '@nestjs/common';
import { File } from 'buffer';

@Injectable()
export class DocumentsService {
  async saveCV(file: File) {
    const document = file;
    return document;
  }
}
