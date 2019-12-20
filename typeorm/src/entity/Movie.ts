import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    movieName: string;

    @Column()
    language: string;

    @Column()
    movieType: string;

}
