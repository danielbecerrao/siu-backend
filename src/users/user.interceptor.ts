import type {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { type Observable, map } from 'rxjs';
import { ClsService } from 'nestjs-cls';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  public constructor(
    private readonly cls: ClsService,
    private readonly fileService: FilesService,
  ) {}

  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    this.cls.set('user', user);
    return next.handle().pipe(
      map(async (data) => {
        if (Array.isArray(data) && user) {
          for await (const user of data) {
            if (user.profilePicture)
              user.profilePictureUrl = await this.fileService.getPresignedUrl(
                'img_users',
                user.profilePicture,
                user.id,
              );
          }
        } else if (data.profilePicture && user) {
          data.profilePictureUrl = await this.fileService.getPresignedUrl(
            'img_users',
            data.profilePicture,
            user.id,
          );
        }
        return data;
      }),
    );
  }
}
