import { CoreOutput } from 'src/common/dtos/output.dto';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dtos/create-user.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { Users } from './entities/user.entity';
export declare class UserService {
    private readonly users;
    constructor(users: Repository<Users>);
    createUser({ email, password }: CreateUserInput): Promise<CoreOutput>;
    getUser({ id }: GetUserInput): Promise<GetUserOutput>;
}
