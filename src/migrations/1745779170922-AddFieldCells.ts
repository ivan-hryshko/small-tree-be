import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFieldCells1745779170922 implements MigrationInterface {
    name = 'AddFieldCells1745779170922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "field_cells" ("id" SERIAL NOT NULL, "x" integer NOT NULL DEFAULT '0', "y" integer NOT NULL DEFAULT '0', "field_id" integer, CONSTRAINT "UQ_8624a8a31e3f500a36c929685b3" UNIQUE ("field_id", "x", "y"), CONSTRAINT "PK_605eb72e6b2c862dcd7e02fa6a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "field_cells" ADD CONSTRAINT "FK_b8a6abaa94b2fbcbc3c2f94a5e5" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "field_cells" DROP CONSTRAINT "FK_b8a6abaa94b2fbcbc3c2f94a5e5"`);
        await queryRunner.query(`DROP TABLE "field_cells"`);
    }

}
