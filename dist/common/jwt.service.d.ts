import { User } from 'src/users/entities/user.entity';
export declare class JwtService {
    getJwt(user: Pick<User, 'email' | 'role'>): Promise<any>;
}
