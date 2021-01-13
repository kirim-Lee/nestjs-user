import { JwtService } from 'src/jwt/jwt.service';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/user.service';
export declare class AuthUserService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    getUser(token: string): Promise<User | null>;
}
