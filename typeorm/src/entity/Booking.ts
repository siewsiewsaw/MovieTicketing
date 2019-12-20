import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { MovieShowing } from "./MovieShowing"

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    bookingId: number;

    @Column()
    movieId: number;

    @Column()
    seatNum: string;

    @Column()
    ticketQty: number;

    @ManyToOne(type => MovieShowing)
    @JoinColumn({ name: 'Id' })
    movieShowing: MovieShowing
}