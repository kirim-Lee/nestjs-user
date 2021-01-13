import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    getUser(getUserInput: GetUserInput): Promise<GetUserOutput>;
    login(loginInput: LoginInput): Promise<LoginOutput>;
}
