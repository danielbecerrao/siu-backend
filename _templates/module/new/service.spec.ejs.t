---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/<%=h.inflection.pluralize(name.toLowerCase())%>.service.spec.ts
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
 names = h.inflection.pluralize(name.toLowerCase())
 Names = h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))
 Nombre = h.inflection.singularize(h.inflection.capitalize(nombre.toLowerCase()))
 Nombres = h.inflection.pluralize(h.inflection.capitalize(nombre.toLowerCase()))
%>import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { <%=Names%>Service } from './<%=names%>.service';
import type { Create<%=Name%>Dto } from './dto/create-<%=name%>.dto';
import type { Update<%=Name%>Dto } from './dto/update-<%=name%>.dto';
import { <%=Name%> } from './entities/<%=name%>.entity';

describe('<%=Names%>Service', () => {
  let service: <%=Names%>Service;
  let repository: Repository<<%=Name%>>;

  const create<%=Name%>Dto: Create<%=Name%>Dto = {
    name: 'Test <%=Name%>',
  };
  const update<%=Name%>Dto: Update<%=Name%>Dto = {
    name: 'Test update <%=Name%>',
  };

  const <%=names%>: <%=Name%>[] = [];
  for (let i = 1; i < 11; i++) {
    const <%=name%>: <%=Name%> = new <%=Name%>();
    <%=name%>.id = i;
    <%=name%>.name = `Test<%=Name%>${i}`;
    <%=names%>.push(<%=name%>);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        <%=Names%>Service,
        {
          provide: getRepositoryToken(<%=Name%>),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<<%=Names%>Service>(<%=Names%>Service);
    repository = module.get<Repository<<%=Name%>>>(getRepositoryToken(<%=Name%>));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a <%=name%>', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(<%=names%>[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(<%=names%>[0]);
      const result = await service.create(create<%=Name%>Dto);
      expect(createSpy).toHaveBeenCalledWith(create<%=Name%>Dto);
      expect(saveSpy).toHaveBeenCalledWith(<%=names%>[0]);
      expect(result).toEqual(<%=names%>[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(<%=names%>[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(create<%=Name%>Dto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(<%=names%>[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear <%=Nombre%>`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(create<%=Name%>Dto);
      expect(saveSpy).toHaveBeenCalledWith(<%=names%>[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of <%=Names%>', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(<%=names%>);
      const result = await service.findAll();
      expect(result).toEqual(<%=names%>);
    });

    it('should return an empty array of <%=Names%>', async () => {
      const empty<%=Names%>: <%=Name%>[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(empty<%=Names%>);
      const result = await service.findAll();
      expect(result).toEqual(empty<%=Names%>);
    });
  });

  describe('findOne', () => {
    it('should return a <%=Name%> object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(<%=names%>[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(<%=names%>[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a <%=name%>', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(<%=names%>[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(<%=names%>[0]);

      const result = await service.update(id, update<%=Name%>Dto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...<%=names%>[0],
        ...update<%=Name%>Dto,
      });

      expect(result).toEqual({
        ...<%=names%>[0],
        ...update<%=Name%>Dto,
      });
    });

    it('should throw NotFoundException when <%=name%> does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, update<%=Name%>Dto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(<%=names%>[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, update<%=Name%>Dto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...<%=names%>[0],
          ...update<%=Name%>Dto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar <%=Nombre%>`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a <%=Name%> when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(<%=names%>[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(<%=names%>[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(<%=names%>[0]);
    });

    it('should throw a NotFoundException when an invalid ID is provided', async () => {
      const id = 12;
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      await expect(service.remove(+id)).rejects.toThrowError(NotFoundException);
    });

    it('should throw BadRequestException on database error', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(<%=names%>[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(<%=names%>[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar <%=Nombre%>`);
        }
      }
    });
  });
});
