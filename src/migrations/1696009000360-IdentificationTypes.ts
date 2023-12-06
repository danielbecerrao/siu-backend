import { IdentificationType } from 'src/identificationtypes/entities/identificationtype.entity';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class IdentificationTypes1696009000360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const identificationtype: IdentificationType = new IdentificationType();
    identificationtype.name = 'Cedula de ciudadanía';
    identificationtype.abbreviation = 'CC';
    await queryRunner.manager.save(identificationtype);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM users');
  }
}
