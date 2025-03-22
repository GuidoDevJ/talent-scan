import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';

describe('DocumentsController', () => {
  let controller: DocumentsController;
  let service: DocumentsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentsController],
      providers: [DocumentsService],
    }).compile();

    controller = module.get<DocumentsController>(DocumentsController);
    service = module.get<DocumentsService>(DocumentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Upload File', () => {
    it('should return "Hello World!"', async () => {
      const data = { msg: 'File Upload' };
      const file = { filename: 'test', path: 'test' } as unknown as File;
      jest
        .spyOn(service, 'saveCV')
        .mockImplementation(() => Promise.resolve(data) as any);
      const response = await service.saveCV(file);
      expect(response).toBe(data);
    });
  });
});
