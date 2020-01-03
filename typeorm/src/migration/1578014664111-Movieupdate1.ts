import {MigrationInterface, QueryRunner} from "typeorm";

export class Movieupdate11578014664111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "ticketQty"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" ADD "ticketQty" int NOT NULL`, undefined);
    }

}
