import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import type { CreateClientDto } from './dto/create-client.dto';
import type { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

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
      controllers: [ClientsController],
      providers: [
        ClientsService,
        {
          provide: getRepositoryToken(Client),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Client', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(clients[0]);
      const result = await controller.create(createClientDto);
      expect(createSpy).toHaveBeenCalledWith(createClientDto);
      expect(result).toEqual(clients[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Clients', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(clients);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(clients);
    });

    it('should return an empty array of Clients', async () => {
      const emptyClients = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyClients);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyClients);
    });
  });

  describe('findOne', () => {
    it('should return a Client when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(clients[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(clients[0]);
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
    it('should update a Client', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(clients[0]);
      const result = await controller.update(id, updateClientDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateClientDto);
      expect(result).toEqual(clients[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Client', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(clients[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(clients[0]);
    });
  });
});
