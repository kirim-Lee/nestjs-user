import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, CreateUserOuput } from './dtos/create-user.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(returns => CreateUserOuput)
  createUser(
    @Args('input') createUserInput: CreateUserInput,
  ): Promise<CreateUserOuput> {
    return this.userService.createUser(createUserInput);
  }

  @Query(returns => GetUserOutput)
  getUser(@Args('input') getUserInput: GetUserInput): Promise<GetUserOutput> {
    return this.userService.getUser(getUserInput);
  }
}
