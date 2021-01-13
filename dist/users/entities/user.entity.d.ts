import { CoreEntity } from 'src/common/entities/core.entity';
export declare enum Role {
    Host = "Host",
    Listener = "Listener"
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: Role;
    mutatePassword(): Promise<void>;
}
