import {MigrationInterface, QueryRunner} from "typeorm";

export class MovieGeneration1576827006772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" int NOT NULL IDENTITY(1,1), "movieName" nvarchar(255) NOT NULL, "language" nvarchar(255) NOT NULL, "movieType" nvarchar(255) NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "movie_showing" ("id" int NOT NULL IDENTITY(1,1), "DateShowing" datetime NOT NULL, "TimeSlot" nvarchar(255) NOT NULL, "price" int NOT NULL, CONSTRAINT "PK_db9f61dcac55d4c099f77a9175f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "booking" ("bookingId" int NOT NULL IDENTITY(1,1), "movieId" int NOT NULL, "seatNum" nvarchar(255) NOT NULL, "ticketQty" int NOT NULL, "Id" int, CONSTRAINT "PK_2aa4ef0259b62eadae336c6df1d" PRIMARY KEY ("bookingId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "snacks" ("orderId" int NOT NULL IDENTITY(1,1), "date" datetime NOT NULL, "foodType" nvarchar(255) NOT NULL, "qty" int NOT NULL, "price" int NOT NULL, CONSTRAINT "PK_1b0b6667b9388681ceebfb65197" PRIMARY KEY ("orderId"))`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_showing" ADD CONSTRAINT "FK_db9f61dcac55d4c099f77a9175f" FOREIGN KEY ("id") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_d62d17761c7bcc6614720a65bc2" FOREIGN KEY ("Id") REFERENCES "movie_showing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_d62d17761c7bcc6614720a65bc2"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_showing" DROP CONSTRAINT "FK_db9f61dcac55d4c099f77a9175f"`, undefined);
        await queryRunner.query(`DROP TABLE "snacks"`, undefined);
        await queryRunner.query(`DROP TABLE "booking"`, undefined);
        await queryRunner.query(`DROP TABLE "movie_showing"`, undefined);
        await queryRunner.query(`DROP TABLE "movie"`, undefined);
    }

}
