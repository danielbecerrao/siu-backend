import { Client } from '../../clients/entities/client.entity';
import { Country } from '../../countries/entities/country.entity';
import { Region } from '../../regions/entities/region.entity';
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

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column({
    nullable: true,
  })
  public subregionId!: number;

  @ManyToOne(() => Subregion, (subregion: Subregion) => subregion.cities)
  public subregion!: Subregion;

  @Column({
    nullable: true,
  })
  public regionId!: number;

  @ManyToOne(() => Region, (region: Region) => region.cities)
  public region!: Region;

  @Column()
  public countryId!: number;

  @ManyToOne(() => Country, (country: Country) => country.cities)
  public country!: Country;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => Client, (client: Client) => client.city)
  public clients!: Client[];
}
