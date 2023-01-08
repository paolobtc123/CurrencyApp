import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeDataService } from './exchange-data.service';

describe('ExchangeDataService', () => {
  let service: ExchangeDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeDataService],
    }).compile();

    service = module.get<ExchangeDataService>(ExchangeDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
