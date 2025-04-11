import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGamesAndFields1744377182532 implements MigrationInterface {
    name = 'AddGamesAndFields1744377182532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "games" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fields" ("id" SERIAL NOT NULL, "gameId" integer, CONSTRAINT "REL_4bd938f6be553a09472a37a9a6" UNIQUE ("gameId"), CONSTRAINT "PK_ee7a215c6cd77a59e2cb3b59d41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "fields" ADD CONSTRAINT "FK_4bd938f6be553a09472a37a9a67" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fields" DROP CONSTRAINT "FK_4bd938f6be553a09472a37a9a67"`);
        await queryRunner.query(`DROP TABLE "fields"`);
        await queryRunner.query(`DROP TABLE "games"`);
    }

}
