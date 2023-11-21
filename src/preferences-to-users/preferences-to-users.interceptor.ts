import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Observable } from 'rxjs';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class PreferencesToUsersInterceptor implements NestInterceptor {
  public constructor(private readonly cls: ClsService) {}
  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    return next.handle();
  }
}
