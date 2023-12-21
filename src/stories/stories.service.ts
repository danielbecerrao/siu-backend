import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { CreateStoryDto } from './dto/create-story.dto';
import type { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './entities/story.entity';

@Injectable()
export class StoriesService {
  public constructor(
    @InjectRepository(Story)
    private readonly storyRepository: Repository<Story>,
    private readonly dataSource: DataSource,
  ) {}

  public async create(createStoryDto: CreateStoryDto): Promise<Story> {
    try {
      const story: Story = this.storyRepository.create(createStoryDto);
      return await this.storyRepository.save(story);
    } catch (error) {
      throw new BadRequestException('Error al crear la Historia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Story[]> {
    return this.storyRepository.find();
  }

  public async findOne(id: number): Promise<Story | null> {
    return this.storyRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateStoryDto: UpdateStoryDto,
  ): Promise<Story> {
    const story: Story | null = await this.findOne(id);
    if (!story)
      throw new NotFoundException('Error al actualizar la Historia', {
        cause: new Error(),
        description: 'Historia no encontrado por id',
      });

    try {
      return await this.storyRepository.save(
        Object.assign(story, updateStoryDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar la Historia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Story> {
    const story: Story | null = await this.findOne(id);
    if (!story)
      throw new NotFoundException('Error al eliminar la Historia', {
        cause: new Error(),
        description: 'Historia no encontrada por id',
      });
    try {
      return await this.storyRepository.softRemove(story);
    } catch (error) {
      throw new BadRequestException('Error al eliminar la Historia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
