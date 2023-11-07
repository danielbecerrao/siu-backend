import { City } from '../../cities/entities/city.entity';
import { Region } from '../../regions/entities/region.entity';
import { Subregion } from '../../subregions/entities/subregion.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => City, (city: City) => city.country)
  public cities!: City[];

  @OneToMany(() => Subregion, (subregion: Subregion) => subregion.country)
  public subregions!: Subregion[];

  @OneToMany(() => Region, (region: Region) => region.country)
  public regions!: Region[];
}
