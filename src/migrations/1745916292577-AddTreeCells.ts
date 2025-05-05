import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTreeCells1745916292577 implements MigrationInterface {
    name = 'AddTreeCells1745916292577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tree_cells" ("id" SERIAL NOT NULL, "tree_id" integer, "field_cell_id" integer, CONSTRAINT "REL_d06f254aef0da2236ae1d9a530" UNIQUE ("field_cell_id"), CONSTRAINT "PK_8bdbd93e7245261243c2c89ad71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tree_cells" ADD CONSTRAINT "FK_23352f26388ba19a440f264346e" FOREIGN KEY ("tree_id") REFERENCES "trees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tree_cells" ADD CONSTRAINT "FK_d06f254aef0da2236ae1d9a5302" FOREIGN KEY ("field_cell_id") REFERENCES "field_cells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tree_cells" DROP CONSTRAINT "FK_d06f254aef0da2236ae1d9a5302"`);
        await queryRunner.query(`ALTER TABLE "tree_cells" DROP CONSTRAINT "FK_23352f26388ba19a440f264346e"`);
        await queryRunner.query(`DROP TABLE "tree_cells"`);
    }

}
