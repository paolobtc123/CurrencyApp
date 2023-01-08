import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeDataController } from './exchange-data.controller';

describe('ExchangeDataController', () => {
  let controller: ExchangeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExchangeDataController],
    }).compile();

    controller = module.get<ExchangeDataController>(ExchangeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
