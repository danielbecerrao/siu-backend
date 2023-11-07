import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1695869891397 implements MigrationInterface {
  public name = ' Initial1695869891397';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "subregions" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "regionId" integer NOT NULL,
                "countryId" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_46f1f54bc9fdaedea223127924d" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "countries" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "cities" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "subregionId" integer,
                "regionId" integer,
                "countryId" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "regions" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "countryId" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_4fcd12ed6a046276e2deb08801c" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "username" character varying NOT NULL,
                "salt" character varying NOT NULL,
                "password" character varying NOT NULL,
                "roleId" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "roles" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "subjects" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "permissions" (
                "id" SERIAL NOT NULL,
                "roleId" integer NOT NULL,
                "subjectId" integer NOT NULL,
                "actionId" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "actions" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                CONSTRAINT "PK_7bfb822f56be449c0b8adbf83cf" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "subregions"
            ADD CONSTRAINT "FK_d591f97c3696ad2e98d8aa22043" FOREIGN KEY ("regionId") REFERENCES "regions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "subregions"
            ADD CONSTRAINT "FK_922ed2bcdb5e52fce9f4d4653d6" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "cities"
            ADD CONSTRAINT "FK_acc2338505a0f273e5d7a5053e2" FOREIGN KEY ("subregionId") REFERENCES "subregions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "cities"
            ADD CONSTRAINT "FK_53122d8c74ee70061deb5343f78" FOREIGN KEY ("regionId") REFERENCES "regions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "cities"
            ADD CONSTRAINT "FK_b5f9bef6e3609b50aac3e103ab3" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "regions"
            ADD CONSTRAINT "FK_449a1b5dc2cb097bb2783f60cde" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "permissions"
            ADD CONSTRAINT "FK_36d7b8e1a331102ec9161e879ce" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "permissions"
            ADD CONSTRAINT "FK_36077b09791624b96f8f9f449a0" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "permissions"
            ADD CONSTRAINT "FK_c598c9812a980e6b9bab24578a3" FOREIGN KEY ("actionId") REFERENCES "actions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "permissions" DROP CONSTRAINT "FK_c598c9812a980e6b9bab24578a3"
        `);
    await queryRunner.query(`
            ALTER TABLE "permissions" DROP CONSTRAINT "FK_36077b09791624b96f8f9f449a0"
        `);
    await queryRunner.query(`
            ALTER TABLE "permissions" DROP CONSTRAINT "FK_36d7b8e1a331102ec9161e879ce"
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "FK_368e146b785b574f42ae9e53d5e"
        `);
    await queryRunner.query(`
            ALTER TABLE "regions" DROP CONSTRAINT "FK_449a1b5dc2cb097bb2783f60cde"
        `);
    await queryRunner.query(`
            ALTER TABLE "cities" DROP CONSTRAINT "FK_b5f9bef6e3609b50aac3e103ab3"
        `);
    await queryRunner.query(`
            ALTER TABLE "cities" DROP CONSTRAINT "FK_53122d8c74ee70061deb5343f78"
        `);
    await queryRunner.query(`
            ALTER TABLE "cities" DROP CONSTRAINT "FK_acc2338505a0f273e5d7a5053e2"
        `);
    await queryRunner.query(`
            ALTER TABLE "subregions" DROP CONSTRAINT "FK_922ed2bcdb5e52fce9f4d4653d6"
        `);
    await queryRunner.query(`
            ALTER TABLE "subregions" DROP CONSTRAINT "FK_d591f97c3696ad2e98d8aa22043"
        `);
    await queryRunner.query(`
            DROP TABLE "actions"
        `);
    await queryRunner.query(`
            DROP TABLE "permissions"
        `);
    await queryRunner.query(`
            DROP TABLE "subjects"
        `);
    await queryRunner.query(`
            DROP TABLE "roles"
        `);
    await queryRunner.query(`
            DROP TABLE "users"
        `);
    await queryRunner.query(`
            DROP TABLE "regions"
        `);
    await queryRunner.query(`
            DROP TABLE "cities"
        `);
    await queryRunner.query(`
            DROP TABLE "countries"
        `);
    await queryRunner.query(`
            DROP TABLE "subregions"
        `);
  }
}
