import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { ExchangeDataEntity } from 'src/exchange-data/exchange-data.entity';
import { ExchangeDataService } from 'src/exchange-data/exchange-data.service';

@Injectable()
export class TaskService {

    constructor(private readonly httpService: HttpService, private _dataService: ExchangeDataService) { }

    @Interval(10000)
    handleInterval() {
        this.getAndSaveData("BTC");
        this.getAndSaveData("ETH");
    }

    getAndSaveData(currency: string) {

        this.httpService.get("http://localhost:3000/exchange-data/" + currency)
            .subscribe(async  (response:any) => {
                console.log(response.data);
                var exchangeData = new ExchangeDataEntity();
                exchangeData['Amount 1'] = 1.0;
                exchangeData['Amount 2'] = response.exchrate ;
                exchangeData['Currency From'] = "USD";
                exchangeData['Currency To'] = currency.toUpperCase();
                exchangeData.Type = "Live Price";
                await this._dataService.InsertUpdateExchangeData(exchangeData);
            });
    }
}
