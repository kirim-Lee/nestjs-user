import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@InputType()
export class GetUserInput extends PickType(User, ['id'], InputType) {}

@ObjectType()
export class GetUserOutput extends CoreOutput {
  @Field(type => User, { nullable: true })
  user?: User;
}
