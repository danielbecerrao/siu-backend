import type { MigrationInterface, QueryRunner } from 'typeorm';

export class NewsImageTypes1696009000380 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO news_image_types (id, name, description) values (1, 'Portada', 'Imagen de tipo Portada')`,
    );
    await queryRunner.query(
      `INSERT INTO news_image_types (id, name, description) values (2, 'Carrusel', 'Imagen de tipo Carrusel')`,
    );
    await queryRunner.query(
      `ALTER SEQUENCE news_image_types_id_seq RESTART WITH 3`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM news_image_types');
  }
}
