import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeDataModule } from './exchange-data/exchange-data.module';

@Module({
  imports: [ExchangeDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
