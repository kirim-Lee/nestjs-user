import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthUserService } from './auth.user.service';
import { roleType } from './roles.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authUserService: AuthUserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = GqlExecutionContext.create(context).getContext();
    console.log(request.token);
    if (request.token) {
      const user = await this.authUserService.getUser(request.token);
      request['user'] = user;
    }

    const roles = this.reflector.get<roleType[]>('roles', context.getHandler());

    if (!roles || !roles.length) {
      return true;
    }

    return (
      request['user'] &&
      (roles.includes('Any') || roles.includes(request['user'].role))
    );
  }
}
