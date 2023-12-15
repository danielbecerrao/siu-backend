import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public firstname!: string;

  @IsNotEmpty()
  public lastname!: string;

  @IsNotEmpty()
  public identification!: string;

  @IsNotEmpty()
  public identificationTypeId!: number;

  @IsNotEmpty()
  @IsEmail()
  public email!: string;

  @IsNotEmpty()
  public phone!: string;

  @IsNotEmpty()
  public birthdayDate!: string;

  @IsNotEmpty()
  public username!: string;

  @IsNotEmpty()
  public password!: string;

  @IsNotEmpty()
  public roleId!: number;

  @IsNotEmpty()
  public clientId!: number;
}
