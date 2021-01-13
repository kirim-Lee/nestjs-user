import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from 'src/jwt/jwt.service';
import { Roles, roleType } from './roles.decorator';
// import { Role } from 'src/users/entities/user.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = GqlExecutionContext.create(context).getContext();

    if (request.token) {
      const user = this.jwtService.decodeJwt(request.token);
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
