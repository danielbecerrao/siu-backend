import { Client } from '../clients/entities/client.entity';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Clients1696009000560 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const client: Client = new Client();
    client.name = 'Buses';
    client.primaryColor = '0xFF800080';
    client.secondaryColor = '0xFFA020F0';
    client.imageUrl = 'https://picsum.photos/200/300';
    await queryRunner.manager.save(client);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM users');
  }
}
