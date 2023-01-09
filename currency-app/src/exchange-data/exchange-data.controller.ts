import { Controller ,Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ExchangeDataService } from './exchange-data.service';

@Controller('exchange-data')
export class ExchangeDataController {
    constructor(private service: ExchangeDataService) { }

    @Get(':cur')
    get(@Param() params) {
        var cur = params.cur;
        var rate = {
            exchrate : null
        };
        var rnd = Math.floor(Math.random() * 21 -10)
        if(cur == null){
            rate.exchrate = null;            
        }
        else if(cur.toUpperCase() == "BTC"){
            rate.exchrate = 0.000062 + (rnd/1000000);
        }
        else if(cur.toUpperCase() == "ETH"){
            rate.exchrate = 0.00082 + (rnd/100000);
        }
        return rate;
        //for testing
      
    }
}
