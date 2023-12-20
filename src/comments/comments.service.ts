import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { CreateCommentDto } from './dto/create-comment.dto';
import type { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import type { User } from 'src/users/entities/user.entity';

@Injectable()
export class CommentsService {
  public constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(
    createCommentDto: CreateCommentDto,
    user: User,
  ): Promise<Comment> {
    try {
      const comment: Comment = new Comment();
      comment.content = createCommentDto.content;
      comment.newsId = createCommentDto.newsId;
      comment.userId = user.id;
      let parent: Comment | null = null;
      if (createCommentDto.parent) {
        parent = await this.findOne(createCommentDto.parent);
      }
      comment.parent = parent;
      return this.dataSource.manager.save(comment);
    } catch (error) {
      throw new BadRequestException('Error al crear Comentario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAllByNewsId(id: number): Promise<Comment[]> {
    const comments: Comment[] = await this.dataSource.manager
      .getTreeRepository(Comment)
      .findTrees({
        relations: ['user', 'news'],
      });
    return comments.filter((comment: Comment) => comment.newsId === id);
  }

  private async findOne(id: number): Promise<Comment | null> {
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
