import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

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

    @CreateDateColumn() 
    "Date & Time":Date;   

    @Column({ length: 3 })
    "Currency From":string;

    @Column({type: "decimal", precision: 14, scale: 7, default: 0})
    "Amount 1":number;

    @Column({ length: 3 })
    "Currency To":string;

    @Column({type: "decimal", precision: 14, scale: 7, default: 0})
    "Amount 2":number;

    @Column({ length: 25 })
    "Type":string;
}
