import { Test, TestingModule } from '@nestjs/testing';
import { WebSocketServiceService } from './web-socket-service.service';

describe('WebSocketServiceService', () => {
  let service: WebSocketServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebSocketServiceService],
    }).compile();

    service = module.get<WebSocketServiceService>(WebSocketServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
