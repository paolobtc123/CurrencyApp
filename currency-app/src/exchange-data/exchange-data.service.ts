import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeDataEntity } from './exchange-data.entity';

@Injectable()
export class ExchangeDataService {

    constructor(@InjectRepository(ExchangeDataEntity) private exchangeDataRepository: Repository<ExchangeDataEntity>) { }



    async getExchangeData(): Promise<ExchangeDataEntity[]> {
        return await this.exchangeDataRepository.find({
            select: ["id","Amount 2",'Currency To','Date & Time'],
            order:{id:"DESC"},
            take:10
            
        });
    }

    async InsertUpdateExchangeData(exchangeData: ExchangeDataEntity) {
        this.exchangeDataRepository.save(exchangeData);        
    }

}
