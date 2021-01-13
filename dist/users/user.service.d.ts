import { CoreOutput } from 'src/common/dtos/output.dto';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dtos/create-user.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly users;
    constructor(users: Repository<User>);
    createUser({ email, password, role, }: CreateUserInput): Promise<CoreOutput>;
    getUser({ id }: GetUserInput): Promise<GetUserOutput>;
}
