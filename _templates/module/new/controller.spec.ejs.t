---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/<%=h.inflection.pluralize(name.toLowerCase())%>.controller.spec.ts
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
 names = h.inflection.pluralize(name.toLowerCase())
 Names = h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))
 Nombres = h.inflection.pluralize(h.inflection.capitalize(nombre.toLowerCase()))
%>import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { <%=Names%>Controller } from './<%=names%>.controller';
import { <%=Names%>Service } from './<%=names%>.service';
import type { Create<%=Name%>Dto } from './dto/create-<%=name%>.dto';
import type { Update<%=Name%>Dto } from './dto/update-<%=name%>.dto';
import { <%=Name%> } from './entities/<%=name%>.entity';

describe('<%=Names%>Controller', () => {
  let controller: <%=Names%>Controller;
  let service: <%=Names%>Service;

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
      controllers: [<%=Names%>Controller],
      providers: [
        <%=Names%>Service,
        {
          provide: getRepositoryToken(<%=Name%>),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<<%=Names%>Controller>(<%=Names%>Controller);
    service = module.get<<%=Names%>Service>(<%=Names%>Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new <%=Name%>', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(<%=names%>[0]);
      const result = await controller.create(create<%=Name%>Dto);
      expect(createSpy).toHaveBeenCalledWith(create<%=Name%>Dto);
      expect(result).toEqual(<%=names%>[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of <%=Names%>', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(<%=names%>);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(<%=names%>);
    });

    it('should return an empty array of <%=Names%>', async () => {
      const empty<%=Names%> = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(empty<%=Names%>);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(empty<%=Names%>);
    });
  });

  describe('findOne', () => {
    it('should return a <%=Name%> when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(<%=names%>[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(<%=names%>[0]);
    });

    it('should return 404 when an invalid ID is provided', async () => {
      const id = '4';
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toBe(null);
    });
  });

  describe('update', () => {
    it('should update a <%=Name%>', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(<%=names%>[0]);
      const result = await controller.update(id, update<%=Name%>Dto);
      expect(updateSpy).toHaveBeenCalledWith(+id, update<%=Name%>Dto);
      expect(result).toEqual(<%=names%>[0]);
    });
  });

  describe('delete', () => {
    it('should delete a <%=Name%>', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(<%=names%>[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(<%=names%>[0]);
    });
  });
});
