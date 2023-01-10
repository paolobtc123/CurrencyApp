import { Body, Controller ,Get, Param, Post} from '@nestjs/common';
import { ExchangeDataEntity } from './exchange-data.entity';
import { ExchangeDataService } from './exchange-data.service';

@Controller('exchange-data')
export class ExchangeDataController {
    constructor(private readonly exchangeDataService:ExchangeDataService) { }

    @Get('/rate/:cur')
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
            rate.exchrate = 0.0000620 + (rnd/1000000);
        }
        else if(cur.toUpperCase() == "ETH"){
            rate.exchrate = 0.0008200 + (rnd/100000);
        }
        return rate;
        //for testing      
    }

    @Get('/lastdata')
    async getLastData(): Promise<ExchangeDataEntity[]>{
        return this.exchangeDataService.getExchangeData();
    }

    @Post()
    async post(@Body() exchangeDataEntity:ExchangeDataEntity){
        exchangeDataEntity.Type = "Exchanged";
        exchangeDataEntity.id = null;
        this.exchangeDataService.InsertUpdateExchangeData(exchangeDataEntity);
    }
}
