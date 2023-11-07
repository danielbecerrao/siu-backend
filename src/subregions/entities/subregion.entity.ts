import { City } from '../../cities/entities/city.entity';
import { Country } from '../../countries/entities/country.entity';
import { Region } from '../../regions/entities/region.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('subregions')
export class Subregion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public regionId!: number;

  @ManyToOne(() => Region, (region: Region) => region.subregions)
  public region!: Region;

  @Column()
  public countryId!: number;

  @ManyToOne(() => Country, (country: Country) => country.subregions)
  public country!: Country;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => City, (city: City) => city.subregion)
  public cities!: City[];
}
