import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeDataModule } from './exchange-data/exchange-data.module';

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
  providers: [AppService],
})
export class AppModule {}
