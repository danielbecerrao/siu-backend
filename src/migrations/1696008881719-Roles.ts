import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Roles1696008881719 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into roles (id, name) values (1, 'Admin')`);
    await queryRunner.query(`insert into roles (id, name) values (2, 'role2')`);
    await queryRunner.query(`insert into roles (id, name) values (3, 'role3')`);
    await queryRunner.query(`ALTER SEQUENCE roles_id_seq RESTART WITH 4`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM roles');
  }
}
