import { City } from '../../cities/entities/city.entity';
import { Country } from '../../countries/entities/country.entity';
import { Subregion } from '../../subregions/entities/subregion.entity';
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

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public countryId!: number;

  @ManyToOne(() => Country, (country: Country) => country.regions)
  public country!: Country;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => City, (city: City) => city.region)
  public cities!: City[];

  @OneToMany(() => Subregion, (subregion: Subregion) => subregion.region)
  public subregions!: Subregion[];
}
