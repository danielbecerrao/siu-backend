import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import type { AppAbility } from 'src/casl/casl-ability.factory';
import { CheckPolicies } from 'src/common/decorators/checkPolicies.decorator';
import { StoriesService } from './stories.service';
import { PayService } from 'src/auth/pay.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import type { Story } from './entities/story.entity';
import type { StoryInterface } from './interfaces/stories.interface';

@Controller('stories')
export class StoriesController {
  public constructor(
    private readonly storiesService: StoriesService,
    private readonly payService: PayService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Story'))
  public async create(@Body() createStoryDto: CreateStoryDto): Promise<Story> {
    return this.storiesService.create(createStoryDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Story'))
  public async findAll(): Promise<StoryInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.accessToken;
      const stories: StoryInterface =
        await this.payService.getAllStories(token);

      return stories;
    } catch (error) {
      throw new Error(`Error when trying to obtain stories data: ${error}`);
    }
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Story'))
  public async findOne(@Param('id') id: string): Promise<StoryInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.accessToken;
      const story: StoryInterface = await this.payService.getOneStory(
        +id,
        token,
      );

      return story;
    } catch (error) {
      throw new Error(`Error when trying to obtain story data: ${error}`);
    }
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Story'))
  public async update(
    @Param('id') id: string,
    @Body() updateStoryDto: UpdateStoryDto,
  ): Promise<Story> {
    return this.storiesService.update(+id, updateStoryDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Story'))
  public async remove(@Param('id') id: string): Promise<Story> {
    return this.storiesService.remove(+id);
  }
}
