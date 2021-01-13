import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';
declare const CreateUserInput_base: import("@nestjs/common").Type<Pick<User, "email" | "password">>;
export declare class CreateUserInput extends CreateUserInput_base {
}
export declare class CreateUserOuput extends CoreOutput {
}
export {};
