import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Subjects1696008885467 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into subjects (id, name) values (1, 'Country')`,
    );
    await queryRunner.query(
      `insert into subjects (id, name) values (2, 'Region')`,
    );
    await queryRunner.query(
      `insert into subjects (id, name) values (3, 'Subregion')`,
    );
    await queryRunner.query(
      `insert into subjects (id, name) values (4, 'City')`,
    );
    await queryRunner.query(`ALTER SEQUENCE subjects_id_seq RESTART WITH 5`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM subjects');
  }
}
