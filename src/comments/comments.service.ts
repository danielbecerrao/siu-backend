import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateCommentDto } from './dto/create-comment.dto';
import type { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  public constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}
  public async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    try {
      const comment: Comment = this.commentRepository.create(createCommentDto);
      return await this.commentRepository.save(comment);
    } catch (error) {
      throw new BadRequestException('Error al crear Comentario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  public async findOne(id: number): Promise<Comment | null> {
    return this.commentRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const comment: Comment | null = await this.findOne(id);
    if (!comment)
      throw new NotFoundException('Error al actualizar Comentario', {
        cause: new Error(),
        description: 'Comentario no encontrado por id',
      });
    try {
      return await this.commentRepository.save(
        Object.assign(comment, updateCommentDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Comentario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Comment> {
    const comment: Comment | null = await this.findOne(id);
    if (!comment)
      throw new NotFoundException('Error al eliminar Comentario', {
        cause: new Error(),
        description: 'Comentario no encontrado por id',
      });
    try {
      return await this.commentRepository.softRemove(comment);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Comentario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
