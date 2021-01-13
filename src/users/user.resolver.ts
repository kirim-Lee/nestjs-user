import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/roles.decorator';
import { AuthUser } from 'src/auth/user.decorator';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { EditAccountInput, EditAccountOutput } from './dtos/edit-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(returns => CreateAccountOutput)
  createUser(
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    return this.userService.createUser(createAccountInput);
  }

  @Query(returns => GetUserOutput)
  getUser(@Args('input') getUserInput: GetUserInput): Promise<GetUserOutput> {
    return this.userService.getUser(getUserInput);
  }

  @Mutation(returns => LoginOutput)
  login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    return this.userService.login(loginInput);
  }

  @Query(returns => User)
  @Roles('Any')
  seeProfile(@AuthUser() user: User): User {
    return user;
  }

  @Mutation(returns => EditAccountOutput)
  @Roles('Any')
  editProfile(
    @AuthUser() user: User,
    @Args('input') editAccountInput: EditAccountInput,
  ): Promise<EditAccountOutput> {
    return this.userService.editProfile(user, editAccountInput);
  }
}
