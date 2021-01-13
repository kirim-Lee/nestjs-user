import { User } from 'src/users/entities/user.entity';
import { JwtOptionInterface } from './jwt.interface';
export declare class JwtService {
    private options;
    constructor(options: JwtOptionInterface);
    getJwt(user: Pick<User, 'email' | 'role'>): Promise<any>;
}
