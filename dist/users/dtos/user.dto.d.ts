import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';
declare const GetUserInput_base: import("@nestjs/common").Type<Pick<User, "id">>;
export declare class GetUserInput extends GetUserInput_base {
}
export declare class GetUserOutput extends CoreOutput {
    user?: User;
}
export {};
