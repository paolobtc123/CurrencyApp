import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeDataEntity } from './exchange-data.entity';
import { ExchangeDataService } from './exchange-data.service';
import { ExchangeDataController } from './exchange-data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeDataEntity])],
  providers: [ExchangeDataService],
  controllers: [ExchangeDataController]
})
export class ExchangeDataModule {}
