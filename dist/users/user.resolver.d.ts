import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { EditAccountInput, EditAccountOutput } from './dtos/edit-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    getUser(getUserInput: GetUserInput): Promise<GetUserOutput>;
    login(loginInput: LoginInput): Promise<LoginOutput>;
    seeProfile(user: User): User;
    editProfile(user: User, editAccountInput: EditAccountInput): Promise<EditAccountOutput>;
}
