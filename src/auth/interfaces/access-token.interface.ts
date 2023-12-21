import type { User } from '../../users/entities/user.entity';

export interface AccessToken {
  user: User;
  accessToken: string;
  refreshToken: string;
}
