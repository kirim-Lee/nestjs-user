import { CoreEntity } from 'src/common/entities/core.entity';
export declare class User extends CoreEntity {
    email: string;
    password: string;
    mutatePassword(): Promise<void>;
}
