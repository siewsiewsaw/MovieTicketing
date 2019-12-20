import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Movie } from "./Movie";

@Entity()
export class MovieShowing {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    DateShowing: Date;

    @Column()
    TimeSlot: string;

    @Column()
    price: number;

    @ManyToOne(type => Movie)
    @JoinColumn({ name: 'id' })
    movie: Movie
}
