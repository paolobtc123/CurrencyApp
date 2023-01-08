import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeDataEntity } from './exchange-data.entity';
import { ExchangeDataService } from './exchange-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeDataEntity])],
  providers: [ExchangeDataService]
})
export class ExchangeDataModule {}
