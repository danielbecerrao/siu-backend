import { IsNotEmpty } from 'class-validator';
import { Menu } from '../entities/menu.entity';
import { Label } from '../../labels/entities/label.entity';
import { Menutype } from '../../menutypes/entities/menutype.entity';

export class CreateMenuDto {
  @IsNotEmpty()
  public menuParent!: Menu;

  @IsNotEmpty()
  public label!: Label;

  @IsNotEmpty()
  public menuType!: Menutype;

  @IsNotEmpty()
  public route!: string;

  @IsNotEmpty()
  public icon!: string;

  @IsNotEmpty()
  public order!: number;

  @IsNotEmpty()
  public isActive!: boolean;
}
