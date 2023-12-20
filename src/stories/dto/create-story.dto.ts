import { IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateStoryDto {
  @IsNumber()
  public clientId!: number;

  @IsNumber()
  public storyCategoryId!: number;

  @IsNumber()
  public personProfileId!: number;

  @IsString()
  public name!: string;

  @IsDate()
  public startDateTime!: Date;

  @IsDate()
  public endDateTime!: Date;

  @IsNumber()
  public viewCounter!: number;

  @IsNumber()
  public likeCounter!: number;

  @IsNumber()
  public actionCounter!: number;

  @IsBoolean()
  public isActive!: number;
}
