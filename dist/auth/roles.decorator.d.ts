import { Role } from 'src/users/entities/user.entity';
export declare type roleType = keyof typeof Role | 'Any';
export declare const Roles: (...roles: roleType[]) => import("@nestjs/common").CustomDecorator<string>;
