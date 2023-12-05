import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  public name!: string;

  @IsNotEmpty()
  public primaryColor!: string;

  @IsNotEmpty()
  public secondaryColor!: string;

  @IsOptional()
  public parent?: number;
}
