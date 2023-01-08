import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class ExchangeDataEntity {
//Date & Time
//Currency From
//Amount 1
//Currency To
//Amount 2
//Type

    @PrimaryGeneratedColumn()
    id: number;

    @Column('date') 
    "Date & Time":Date;   

    @Column({ length: 25 })
    "Currency From":string;

    @Column()
    "Amount 1":number;

    @Column({ length: 25 })
    "Currency To":string;

    @Column()
    "Amount 2":number;

    @Column({ length: 25 })
    "Type":string;
}
