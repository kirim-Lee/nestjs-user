import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthUserService } from './auth.user.service';
export declare class AuthGuard implements CanActivate {
    private reflector;
    private authUserService;
    constructor(reflector: Reflector, authUserService: AuthUserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
