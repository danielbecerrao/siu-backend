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
import { Client } from '../../clients/entities/client.entity';
import { PreferenceToUserLog } from '../../preferences-to-users/entities/preference-to-userLog.entity';
import { PreferenceLog } from '../../preferences/entities/preferencelog.entity';
import { ClientLog } from '../../clients/entities/clientlog.entity';
import { SiteLog } from '../../sites/entities/sitelog.entity';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { Role } from '../../roles/entities/role.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { IdentificationType } from '../../identificationtypes/entities/identificationtype.entity';
import { AddressLog } from '../../addresses/entities/addresslog.entity';
import { NewsFileLog } from '../../newsfiles/entities/newsFilelog.entity';
import { NewsImageLog } from '../../newsimages/entities/newsImagelog.entity';
import { NewsCategoryLog } from '../../newscategories/entities/newsCategorylog.entity';
import { NewsLog } from '../../news/entities/newslog.entity';
import { CommentLog } from '../../comments/entities/commentlog.entity';

@Entity('users')
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public firstname!: string;

  @Column()
  public lastname!: string;

  @Column()
  public identification!: string;

  @Column()
  public identificationTypeId!: number;

  @Column()
  public email!: string;

  @Column()
  public phone!: string;

  @Column({ nullable: true })
  public profilePicture!: string;

  @Column()
  public birthdayDate!: string;

  @Column()
  public username!: string;

  @Column()
  @Exclude()
  public salt!: string;

  @Column()
  @Exclude()
  public password!: string;

  @Column()
  public roleId!: number;

  @ManyToOne(() => Role, (role: Role) => role.users)
  public role!: Role;

  @Column()
  public clientId!: number;

  @ManyToOne(() => Client, (client: Client) => client.users)
  public client!: Client;

  @OneToMany(() => ClientLog, (clientLog: ClientLog) => clientLog.user)
  public clientLogs!: ClientLog[];

  @ManyToOne(
    () => IdentificationType,
    (identificationType: IdentificationType) => identificationType.users,
  )
  public identificationtype!: IdentificationType;

  @OneToMany(() => NewsLog, (newLog: NewsLog) => newLog.user)
  public newsLogs!: NewsLog[];

  @OneToMany(() => NewsFileLog, (newsfileLog: NewsFileLog) => newsfileLog.user)
  public newsfileLogs!: NewsFileLog[];

  @OneToMany(
    () => NewsImageLog,
    (newsimageLog: NewsImageLog) => newsimageLog.user,
  )
  public newsimageLogs!: NewsImageLog[];

  @OneToMany(
    () => NewsCategoryLog,
    (newscategoryLog: NewsCategoryLog) => newscategoryLog.user,
  )
  public newscategoryLogs!: NewsCategoryLog[];

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => Comment, (comment: Comment) => comment.user)
  public comments!: [];

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

  @OneToMany(
    () => PreferenceLog,
    (preferenceLogs: PreferenceLog) => preferenceLogs.user,
  )
  public preferenceLogs!: PreferenceLog[];

  @OneToMany(
    () => PreferenceToUserLog,
    (preferenceToUserLog: PreferenceToUserLog) => preferenceToUserLog.user,
  )
  public preferenceToUserLogs!: PreferenceToUserLog[];

  @OneToMany(() => AddressLog, (addressLog: AddressLog) => addressLog.user)
  public addressLogs!: AddressLog[];

  @OneToMany(() => UserLog, (userLog: UserLog) => userLog.user)
  public userLogs!: UserLog[];

  @OneToMany(() => CommentLog, (commentLog: CommentLog) => commentLog.user)
  public commentLogs!: CommentLog[];

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
    if (this.password && this.password.length > 0) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
      this.salt = salt;
    }
  }

  public constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
