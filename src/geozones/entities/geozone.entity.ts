import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Client } from 'src/clients/entities/client.entity';
import { GeozoneType } from './geozoneType.entity';
import { GeozoneCategory } from './geozoneCategory.entity';
import { Country } from 'src/countries/entities/country.entity';
import { City } from 'src/cities/entities/city.entity';

@Entity('geozones')
export class Geozone {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public clientId!: number;

  @ManyToOne(() => Client, (client: Client) => client.geozones)
  public client!: Client;

  @Column()
  public geozoneTypeId!: number;

  @ManyToOne(
    () => GeozoneType,
    (geozoneTypes: GeozoneType) => geozoneTypes.geozones,
  )
  public geozoneTypes!: GeozoneType;

  @Column()
  public geozoneCategoryId!: number;

  @ManyToOne(
    () => GeozoneCategory,
    (geozoneCategory: GeozoneCategory) => geozoneCategory.geozones,
  )
  public geozoneCategory!: Client;

  @Column()
  public countryId!: number;

  @ManyToOne(() => Country, (country: Country) => country.geozones)
  public country!: Country;

  @Column()
  public cityId!: number;

  @ManyToOne(() => City, (city: City) => city.geozones)
  public city!: City;

  @Column()
  public code!: string;

  @Column()
  public name!: string;

  @Column()
  public support_wheelchair!: number;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
