import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Actions1696008888036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into actions (id, name) values (1, 'Create')`,
    );
    await queryRunner.query(
      `insert into actions (id, name) values (2, 'Read')`,
    );
    await queryRunner.query(
      `insert into actions (id, name) values (3, 'Update')`,
    );
    await queryRunner.query(
      `insert into actions (id, name) values (4, 'Delete')`,
    );
    await queryRunner.query(`ALTER SEQUENCE actions_id_seq RESTART WITH 5`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM actions');
  }
}
