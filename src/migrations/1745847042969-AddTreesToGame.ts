import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTreesToGame1745847042969 implements MigrationInterface {
    name = 'AddTreesToGame1745847042969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trees" ("id" SERIAL NOT NULL, "game_id" integer NOT NULL, CONSTRAINT "PK_916905d3ddf29a431776817cd8d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "trees" ADD CONSTRAINT "FK_48290fede8ef0d6d7fcca1af3fc" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trees" DROP CONSTRAINT "FK_48290fede8ef0d6d7fcca1af3fc"`);
        await queryRunner.query(`DROP TABLE "trees"`);
    }

}
