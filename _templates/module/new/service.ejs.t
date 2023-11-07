---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/<%=h.inflection.pluralize(name.toLowerCase())%>.service.ts
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
 names = h.inflection.pluralize(name.toLowerCase())
 Names = h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))
 Nombre = h.inflection.singularize(h.inflection.capitalize(nombre.toLowerCase()))
%>import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { Create<%=Name%>Dto } from './dto/create-<%=name%>.dto';
import type { Update<%=Name%>Dto } from './dto/update-<%=name%>.dto';
import { <%=Name%> } from './entities/<%=name%>.entity';

@Injectable()
export class <%=Names%>Service {
  public constructor(
    @InjectRepository(<%=Name%>)
    private readonly <%=name%>Repository: Repository<<%=Name%>>,
  ) {}
  public async create(create<%=Name%>Dto: Create<%=Name%>Dto): Promise<<%=Name%>> {
    try {
      const <%=name%>: <%=Name%> = this.<%=name%>Repository.create(create<%=Name%>Dto);
      return await this.<%=name%>Repository.save(<%=name%>);
    } catch (error) {
      throw new BadRequestException('Error al crear <%=Nombre%>', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<<%=Name%>[]> {
    return this.<%=name%>Repository.find();
  }

  public async findOne(id: number): Promise<<%=Name%> | null> {
    return this.<%=name%>Repository.findOneBy({ id });
  }

  public async update(
    id: number,
    update<%=Name%>Dto: Update<%=Name%>Dto,
  ): Promise<<%=Name%>> {
    const <%=name%>: <%=Name%> | null = await this.findOne(id);
    if (!<%=name%>)
      throw new NotFoundException('Error al actualizar <%=Nombre%>', {
        cause: new Error(),
        description: '<%=Nombre%> no encontrado por id',
      });
    try {
      return await this.<%=name%>Repository.save(
        Object.assign(<%=name%>, update<%=Name%>Dto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar <%=Nombre%>', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<<%=Name%>> {
    const <%=name%>: <%=Name%> | null = await this.findOne(id);
    if (!<%=name%>)
      throw new NotFoundException('Error al eliminar <%=Nombre%>', {
        cause: new Error(),
        description: '<%=Nombre%> no encontrado por id',
      });
    try {
      return await this.<%=name%>Repository.softRemove(<%=name%>);
    } catch (error) {
      throw new BadRequestException('Error al eliminar <%=Nombre%>', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
