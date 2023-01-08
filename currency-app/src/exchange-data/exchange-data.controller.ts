import { Controller ,Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ExchangeDataEntity } from './exchange-data.entity';
import { ExchangeDataService } from './exchange-data.service';

@Controller('exchange-data')
export class ExchangeDataController {
    constructor(private service: ExchangeDataService) { }

    @Get(':id')
    async get(@Param() params) {
        //test
        var exchangeData = new ExchangeDataEntity();
        exchangeData['Amount 1'] = 123.7798;
        exchangeData['Amount 2'] = 234.568;
        exchangeData['Currency From'] = "EUR";
        exchangeData['Currency To'] = "USD";
        exchangeData['Date & Time'] = new Date();
        exchangeData.Type = "Test";
        await this.service.InsertUpdateExchangeData(exchangeData);
        return this.service.getExchangeData(params.id);
    }
}
