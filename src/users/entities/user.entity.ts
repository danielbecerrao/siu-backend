import { SiteLog } from 'src/sites/entities/sitelog.entity';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { Role } from '../../roles/entities/role.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { CountryLog } from '../../countries/entities/countrylog.entity';
import { ActionLog } from '../../actions/entities/actionlog.entity';
import { CityLog } from '../../cities/entities/citylog.entity';
import { PermissionLog } from '../../permissions/entities/permissionlog.entity';
import { RegionLog } from '../../regions/entities/regionlog.entity';
import { RoleLog } from '../../roles/entities/rolelog.entity';
import { SubjectLog } from '../../subjects/entities/subjectlog.entity';
import { SubregionLog } from '../../subregions/entities/subregionlog.entity';
import { UserLog } from './userlog.entity';

@Entity('users')
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public username!: string;

  @Column()
  public salt!: string;

  @Column()
  @Exclude()
  public password!: string;

  @Column()
  public roleId!: number;

  @ManyToOne(() => Role, (role: Role) => role.users)
  public role!: Role;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => ActionLog, (actionLog: ActionLog) => actionLog.user)
  public actionLogs!: ActionLog[];

  @OneToMany(() => CityLog, (cityLog: CityLog) => cityLog.user)
  public cityLogs!: CityLog[];

  @OneToMany(() => CountryLog, (countryLog: CountryLog) => countryLog.user)
  public countryLogs!: CountryLog[];

  @OneToMany(
    () => PermissionLog,
    (permissionLog: PermissionLog) => permissionLog.user,
  )
  public permissionLogs!: PermissionLog[];

  @OneToMany(() => RegionLog, (regionLog: RegionLog) => regionLog.user)
  public regionLogs!: RegionLog[];

  @OneToMany(() => RoleLog, (roleLog: RoleLog) => roleLog.user)
  public roleLogs!: RoleLog[];

  @OneToMany(() => SiteLog, (siteLog: SiteLog) => siteLog.user)
  public siteLogs!: SiteLog[];

  @OneToMany(() => SubjectLog, (subjectLog: SubjectLog) => subjectLog.user)
  public subjectLogs!: SubjectLog[];

  @OneToMany(
    () => SubregionLog,
    (subregionLog: SubregionLog) => subregionLog.user,
  )
  public subregionLogs!: SubregionLog[];

  @OneToMany(() => UserLog, (userLog: UserLog) => userLog.user)
  public userLogs!: UserLog[];

  @BeforeInsert()
  @BeforeUpdate()
  public lowerCaseUsername(): void {
    if (this.username) {
      this.username = this.username.toLowerCase().trim();
    }
  }

  @BeforeInsert()
  @BeforeUpdate()
  public async hashPassword(): Promise<void> {
    if (this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
      this.salt = salt;
    }
  }
}
