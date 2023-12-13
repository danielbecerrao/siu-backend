import type { MigrationInterface, QueryRunner } from 'typeorm';

export class NewsCategoriees1696009000390 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO news_categories (id, name, description) values (1, 'Noticias', 'Categoria de tipo noticias')`,
    );
    await queryRunner.query(
      `INSERT INTO news_categories (id, name, description) values (2, 'Tips', 'Categoria de tipo tips')`,
    );
    await queryRunner.query(
      `INSERT INTO news_categories (id, name, description) values (3, 'Eventos', 'Categoria de tipo eventos')`,
    );
    await queryRunner.query(
      `ALTER SEQUENCE news_categories_id_seq RESTART WITH 4`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM news_categories');
  }
}
