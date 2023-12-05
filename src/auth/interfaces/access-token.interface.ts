import type { User } from 'src/users/entities/user.entity';

export interface AccessToken {
  user: User;
  accessToken: string;
  refreshToken: string;
}
