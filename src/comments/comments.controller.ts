import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import type { Comment } from './entities/comment.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('comments')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Comentarios')
@ApiBearerAuth()
export class CommentsController {
  public constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Comment'))
  public async create(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Comment'))
  public async findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Comment'))
  public async findOne(@Param('id') id: string): Promise<Comment | null> {
    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Comment'))
  public async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Comment'))
  public async remove(@Param('id') id: string): Promise<Comment> {
    return this.commentsService.remove(+id);
  }
}
