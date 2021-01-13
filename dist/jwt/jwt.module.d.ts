import { DynamicModule } from '@nestjs/common';
import { JwtOptionInterface } from './jwt.interface';
export declare class JwtModule {
    static register(options: JwtOptionInterface): DynamicModule;
}
