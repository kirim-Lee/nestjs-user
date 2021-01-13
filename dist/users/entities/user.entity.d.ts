import { CoreEntity } from 'src/common/entities/core.entity';
declare enum Role {
    Host = "Host",
    Listener = "Listener"
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: Role;
    mutatePassword(): Promise<void>;
}
export {};
