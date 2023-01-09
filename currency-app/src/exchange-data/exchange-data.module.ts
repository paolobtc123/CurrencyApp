import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeDataEntity } from './exchange-data.entity';
import { ExchangeDataService } from './exchange-data.service';
import { ExchangeDataController } from './exchange-data.controller';
import { TaskService } from './task.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { EventsGateway } from './events.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeDataEntity]),
  HttpModule,
  ScheduleModule.forRoot(),
  HttpModule],
  providers: [TaskService,ExchangeDataService, EventsGateway],
  controllers: [ExchangeDataController]
})
export class ExchangeDataModule {}
