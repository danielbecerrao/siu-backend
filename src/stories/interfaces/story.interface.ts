export interface StoryInterface {
  ID: number;
  CLIENT_ID: number;
  STORY_CATEGORY_ID: number;
  PERSON_PROFILE_ID: number;
  NAME: string;
  START_DATETIME: Date;
  END_DATETIME: Date;
  VIEW_COUNTER: number;
  LIKE_COUNTER: number;
  ACTION_COUNTER: number;
  IS_ACTIVE: number;
  CREATED_AT: Date;
  CREATED_BY: string;
  UPDATED_AT: Date;
  UPDATED_BY: string;
}
