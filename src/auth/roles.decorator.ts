import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/users/entities/user.entity';

export type roleType = keyof typeof Role | 'Any';

export const Roles = (...roles: roleType[]) => SetMetadata('roles', roles);
