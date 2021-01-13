import { Repository } from 'typeorm';
import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
export declare class UserService {
    private readonly users;
    private readonly jwtService;
    constructor(users: Repository<User>, jwtService: JwtService);
    createUser({ email, password, role, }: CreateAccountInput): Promise<CreateAccountOutput>;
    getUser({ id }: GetUserInput): Promise<GetUserOutput>;
    login({ email, password }: LoginInput): Promise<LoginOutput>;
}
