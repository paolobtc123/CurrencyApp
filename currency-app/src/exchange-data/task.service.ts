import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { ExchangeDataEntity } from 'src/exchange-data/exchange-data.entity';
import { ExchangeDataService } from 'src/exchange-data/exchange-data.service';
import { WebSocketServiceService } from './web-socket-service.service';

@Injectable()
export class TaskService {

    constructor(
        private readonly httpService: HttpService, 
        private _dataService: ExchangeDataService,
        private readonly webSocketServiceService: WebSocketServiceService
        ) { }

        otherIsDone :boolean = false;

    @Interval(10000)
    handleInterval() {
        this.otherIsDone = false;
        this.getAndSaveData("BTC");
        this.getAndSaveData("ETH");
    }

    getAndSaveData(currency: string) {

        this.httpService.get("http://localhost:3000/exchange-data/" + currency)
            .subscribe(async  (response:any) => {
                //console.log(response);
                var exchangeData = new ExchangeDataEntity();
                exchangeData['Amount 1'] = 1.0;
                exchangeData['Amount 2'] = response.data.exchrate ;
                exchangeData['Currency From'] = "USD";
                exchangeData['Currency To'] = currency.toUpperCase();
                exchangeData.Type = "Live Price";
                console.log(exchangeData);
                await this._dataService.InsertUpdateExchangeData(exchangeData);
                if(this.otherIsDone){
                    await this.raiseEvent()
                }else{
                    this.otherIsDone = true;
                }
            });
    }

    async  raiseEvent() {
        this._dataService.getExchangeData().then((response) => {
            this.webSocketServiceService.SendDataToClients('exchangeData',response);        
        });
    }
}


