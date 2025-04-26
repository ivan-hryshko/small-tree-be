import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHeightAndWidthToField1745694258829 implements MigrationInterface {
    name = 'AddHeightAndWidthToField1745694258829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fields" ADD "width" integer NOT NULL DEFAULT '20'`);
        await queryRunner.query(`ALTER TABLE "fields" ADD "height" integer NOT NULL DEFAULT '10'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fields" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "fields" DROP COLUMN "width"`);
    }

}
