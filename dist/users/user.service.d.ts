import { Repository } from 'typeorm';
import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly users;
    constructor(users: Repository<User>);
    createUser({ email, password, role, }: CreateAccountInput): Promise<CreateAccountOutput>;
    getUser({ id }: GetUserInput): Promise<GetUserOutput>;
}
