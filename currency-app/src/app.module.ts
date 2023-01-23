import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeDataModule } from './exchange-data/exchange-data.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { TaskService } from './exchange-data/task.service';
import { ExchangeDataService } from './exchange-data/exchange-data.service';
import { EventsGateway } from './exchange-data/events.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "currapp",
      "password": "currapp123",
      "database": "currencyapp",
      "entities":  [join(__dirname, '**', '*.entity.{ts,js}')],
      "synchronize": true
    }),
    ExchangeDataModule],
  controllers: [AppController],
  providers: [AppService,EventsGateway],
})
export class AppModule {}
