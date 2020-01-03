import {MigrationInterface, QueryRunner} from "typeorm";

export class Movieupdate21578029997948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "booking" ("bookingId" int NOT NULL IDENTITY(1,1), "movieId" int NOT NULL, "seatNum" nvarchar(255) NOT NULL, "DateShowing" datetime NOT NULL, "TimeSlot" nvarchar(255) NOT NULL, "price" int NOT NULL, CONSTRAINT "PK_2aa4ef0259b62eadae336c6df1d" PRIMARY KEY ("bookingId"))`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_f9bb5ef37ba5803611f1121e0b3" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_f9bb5ef37ba5803611f1121e0b3"`, undefined);
        await queryRunner.query(`DROP TABLE "booking"`, undefined);
    }

}
