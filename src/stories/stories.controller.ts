import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import type { AppAbility } from 'src/casl/casl-ability.factory';
import { CheckPolicies } from 'src/common/decorators/checkPolicies.decorator';
import { StoriesService } from './stories.service';
import { PayService } from 'src/auth/pay.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import type { Story } from './entities/story.entity';
import type { StoryInterface } from './interfaces/story.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('stories')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Historias')
@ApiBearerAuth()
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
      const token: string = apiResponse.data.ACCESS_TOCKEN;
      const stories: StoryInterface =
        await this.payService.getAllStories(token);

      return stories;
    } catch (error) {
      throw new Error(`Error when trying to obtain stories data: ${error}`);
    }
  }

  @Post('person_profile')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Story'))
  public async findAllByPersonProfile(
    @Body() person_profile_id: number,
  ): Promise<StoryInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.data.ACCESS_TOCKEN;
      const stories: StoryInterface =
        await this.payService.getAllStoriesByPersonProfile(
          token,
          person_profile_id,
        );

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
      const token: string = apiResponse.data.ACCESS_TOCKEN;
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
