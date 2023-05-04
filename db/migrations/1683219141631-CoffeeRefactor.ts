import { MigrationInterface, QueryRunner } from "typeorm";

export class CoffeeRefactor1683219141631 implements MigrationInterface {
    name = 'CoffeeRefactor1683219141631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }

}
