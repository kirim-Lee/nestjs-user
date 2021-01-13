import { Role } from 'src/users/entities/user.entity';
export declare type roleType = keyof typeof Role;
export declare const Roles: (...roles: roleType[]) => import("@nestjs/common").CustomDecorator<string>;
