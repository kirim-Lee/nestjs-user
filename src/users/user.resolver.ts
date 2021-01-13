import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
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
}
