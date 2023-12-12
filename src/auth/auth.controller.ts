import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../common/decorators/user.decorator';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshJwtAuthGuard } from './guards/refresh-jwt-auth.guard';
import type { AccessToken } from './interfaces/access-token.interface';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
@ApiTags('Autenticación')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: AuthDto })
  @Post('login')
  public async login(@GetUser() user: User): Promise<AccessToken> {
    return this.authService.login(user);
  }

  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  public async refreshToken(@GetUser() user: User): Promise<AccessToken> {
    return this.authService.refreshToken(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('validate')
  public async validateToken(): Promise<boolean> {
    return true;
  }
}
