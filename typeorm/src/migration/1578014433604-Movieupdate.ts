import {MigrationInterface, QueryRunner} from "typeorm";

export class Movieupdate1578014433604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "booking" ("bookingId" int NOT NULL IDENTITY(1,1), "movieId" int NOT NULL, "seatNum" nvarchar(255) NOT NULL, "ticketQty" int NOT NULL, CONSTRAINT "PK_2aa4ef0259b62eadae336c6df1d" PRIMARY KEY ("bookingId"))`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_2aa4ef0259b62eadae336c6df1d" FOREIGN KEY ("bookingId") REFERENCES "movie_showing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_2aa4ef0259b62eadae336c6df1d"`, undefined);
        await queryRunner.query(`DROP TABLE "booking"`, undefined);
    }

}
