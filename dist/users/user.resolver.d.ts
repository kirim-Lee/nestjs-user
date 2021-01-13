import { CreateUserInput, CreateUserOuput } from './dtos/create-user.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<CreateUserOuput>;
    getUser(getUserInput: GetUserInput): Promise<GetUserOutput>;
}
