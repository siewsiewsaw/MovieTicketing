import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Movie } from "./Movie";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    bookingId: number;

    @Column()
    movieId: number;

    @Column()
    seatNum: string;

    @Column()
    DateShowing: Date;

    @Column()
    TimeSlot: string;

    @Column()
    price: number;

    @ManyToOne(type => Movie)
    @JoinColumn({ name: 'movieId' })
    movie: Movie
}