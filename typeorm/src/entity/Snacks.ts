import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Snacks {

    @PrimaryGeneratedColumn()
    orderId: number;

    @Column()
    date: Date;

    @Column()
    foodType: string;

    @Column()
    qty: number;

    @Column()
    price: number; 
}
