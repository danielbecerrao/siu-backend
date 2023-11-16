import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  public name!: string;

  @IsOptional()
  public parent?: number;
}
