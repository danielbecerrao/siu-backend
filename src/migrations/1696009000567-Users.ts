import { User } from '../users/entities/user.entity';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1696009000567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const user: User = new User({
      username: 'admin',
      name: 'admin',
      password: '1234',
      roleId: 1,
      clientId: 1,
    });
    await queryRunner.manager.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM users');
  }
}
