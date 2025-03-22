import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsService } from './documents.service';

describe('DocumentsService', () => {
  let service: DocumentsService;
  let mulserS3: MulterS3Service;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentsService],
    }).compile();

    service = module.get<DocumentsService>(DocumentsService);
    mulserS3 = module.get<MulterS3Service>(MulterS3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('Save CV', () => {
    it('should save the cv', async () => {
      const file = { filename: 'test', path: 'test' } as unknown as File;
      const document = await service.saveCV(file);
      expect(document).toBeDefined();
    });
  });
});
