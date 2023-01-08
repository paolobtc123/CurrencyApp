import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeDataEntity } from './exchange-data.entity/exchange-data.entity';
//https://shaibenshimol.medium.com/nestjs-and-mysql-in-10-minutes-711e02ec1dab
@Injectable()
export class ExchangeDataService {

    constructor(@InjectRepository(ExchangeDataEntity) private exchangeDataRepository: Repository<ExchangeDataEntity>) { }

    async getUsers(user: ExchangeDataEntity): Promise<ExchangeDataEntity[]> {
        return await this.exchangeDataRepository.find();
    }

    async getUser(_id: number): Promise<ExchangeDataEntity[]> {
        return await this.exchangeDataRepository.find({
            select: ["fullName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async updateUser(user: ExchangeDataEntity) {
        this.exchangeDataRepository.save(user)
    }

    async deleteUser(user: ExchangeDataEntity) {
        this.exchangeDataRepository.delete(user);
    }
}
