import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeDataEntity } from './exchange-data.entity';
//https://shaibenshimol.medium.com/nestjs-and-mysql-in-10-minutes-711e02ec1dab
@Injectable()
export class ExchangeDataService {

    constructor(@InjectRepository(ExchangeDataEntity) private exchangeDataRepository: Repository<ExchangeDataEntity>) { }

    async getExchangeDatas(): Promise<ExchangeDataEntity[]> {
        return await this.exchangeDataRepository.find();
    }

    async getExchangeData(_id: number): Promise<ExchangeDataEntity[]> {
        return await this.exchangeDataRepository.find({
            select: ["Amount 1", "Currency From", "Amount 2",'Currency To','Date & Time','Type'],
            where: [{ "id": _id }]
        });
    }

    async InsertUpdateExchangeData(exchangeData: ExchangeDataEntity) {
        this.exchangeDataRepository.save(exchangeData)
        
    }

    async deleteExchangeData(exchangeData: ExchangeDataEntity) {
        this.exchangeDataRepository.delete(exchangeData);
    }
}
