import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsService } from './clients.service';
import type { CreateClientDto } from './dto/create-client.dto';
import type { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

describe('ClientsService', () => {
  let service: ClientsService;
  let repository: Repository<Client>;

  const createClientDto: CreateClientDto = {
    name: 'Test Client',
  };
  const updateClientDto: UpdateClientDto = {
    name: 'Test update Client',
  };

  const clients: Client[] = [];
  for (let i = 1; i < 11; i++) {
    const client: Client = new Client();
    client.id = i;
    client.name = `TestClient${i}`;
    clients.push(client);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        {
          provide: getRepositoryToken(Client),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
    repository = module.get<Repository<Client>>(getRepositoryToken(Client));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a client', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(clients[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(clients[0]);
      const result = await service.create(createClientDto);
      expect(createSpy).toHaveBeenCalledWith(createClientDto);
      expect(saveSpy).toHaveBeenCalledWith(clients[0]);
      expect(result).toEqual(clients[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(clients[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createClientDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(clients[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Cliente`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createClientDto);
      expect(saveSpy).toHaveBeenCalledWith(clients[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Clients', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(clients);
      const result = await service.findAll();
      expect(result).toEqual(clients);
    });

    it('should return an empty array of Clients', async () => {
      const emptyClients: Client[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyClients);
      const result = await service.findAll();
      expect(result).toEqual(emptyClients);
    });
  });

  describe('findOne', () => {
    it('should return a Client object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(clients[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(clients[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a client', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(clients[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(clients[0]);

      const result = await service.update(id, updateClientDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...clients[0],
        ...updateClientDto,
      });

      expect(result).toEqual({
        ...clients[0],
        ...updateClientDto,
      });
    });

    it('should throw NotFoundException when client does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateClientDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(clients[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateClientDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...clients[0],
          ...updateClientDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Cliente`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Client when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(clients[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(clients[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(clients[0]);
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
        .mockResolvedValue(clients[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(clients[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Cliente`);
        }
      }
    });
  });
});
