import type { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1696008900427 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into permissions (id, "roleId", "subjectId", "actionId") values (1, 1, 1, 1)`,
    );
    await queryRunner.query(
      `insert into permissions (id, "roleId", "subjectId", "actionId") values (2, 1, 1, 2)`,
    );
    await queryRunner.query(
      `insert into permissions (id, "roleId", "subjectId", "actionId") values (3, 1, 1, 3)`,
    );
    await queryRunner.query(
      `insert into permissions (id, "roleId", "subjectId", "actionId") values (4, 1, 1, 4)`,
    );
    await queryRunner.query(`ALTER SEQUENCE permissions_id_seq RESTART WITH 5`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM permissions');
  }
}
