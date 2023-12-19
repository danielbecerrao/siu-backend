import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import type { PaginateConfig } from 'nestjs-paginate';
import { FilterOperator } from 'nestjs-paginate';
import { FareType } from './fareType.entity';
import { FareCategory } from './fareCategory.entity';
import { Route } from 'src/routes/entities/route.entity';
import { Client } from 'src/clients/entities/client.entity';

@Entity('fares')
export class Fare {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public clientId!: number;

  @ManyToOne(() => Client, (client: Client) => client.fares)
  public client!: Client;

  @Column()
  public fareTypeId!: number;

  @ManyToOne(() => FareType, (fareType: FareType) => fareType.fares)
  public fareType!: FareType;

  @Column()
  public fareCategoryId!: number;

  @ManyToOne(
    () => FareCategory,
    (fareCategory: FareCategory) => fareCategory.fares,
  )
  public fareCategory!: FareCategory;

  @Column()
  public routeId!: number;

  @ManyToOne(() => Route, (route: Route) => route.fares)
  public route!: Route;

  @Column()
  public name!: string;

  @Column({ type: 'text' })
  public description!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}

export const config: PaginateConfig<Fare> = {
  loadEagerRelations: true,
  sortableColumns: [
    'id',
    'route.name',
    'fareType.name',
    'fareCategory.name',
    'description',
    'createdAt',
  ],
  relations: ['client', 'route', 'fareType', 'fareCategory'],
  filterableColumns: {
    'route.name': [FilterOperator.IN],
    'fareType.name': [FilterOperator.IN],
    'fareCategory.name': [FilterOperator.IN],
  },
};
