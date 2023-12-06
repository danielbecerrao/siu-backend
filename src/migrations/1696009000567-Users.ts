import { User } from '../users/entities/user.entity';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1696009000567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const user: User = new User({
      username: 'admin',
      firstname: 'admin',
      lastname: 'admin',
      identificationTypeId: 1,
      identification: '1087667654',
      email: 'admin@admin.com',
      phone: '555123456',
      profilePicture: 'https://picsum.photos/200/300',
      birthdayDate: '01/06/1990',
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
