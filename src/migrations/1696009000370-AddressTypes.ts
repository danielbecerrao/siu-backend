import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddressTypes1696009000370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO address_types (id, name) values (1, 'Casa')`,
    );
    await queryRunner.query(
      `INSERT INTO address_types (id, name) values (2, 'Trabajo')`,
    );
    await queryRunner.query(
      `ALTER SEQUENCE address_types_id_seq RESTART WITH 3`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM address_types');
  }
}
