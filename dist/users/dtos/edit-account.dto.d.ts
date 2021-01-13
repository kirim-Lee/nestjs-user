import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';
declare const EditAccountInput_base: import("@nestjs/common").Type<Partial<Pick<User, "email" | "password" | "role" | "mutatePassword" | "id" | "createdAt" | "updatedAt">>>;
export declare class EditAccountInput extends EditAccountInput_base {
}
export declare class EditAccountOutput extends CoreOutput {
}
export {};
