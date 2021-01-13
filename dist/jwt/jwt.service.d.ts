import { JwtOptionInterface } from './jwt.interface';
export declare class JwtService {
    private options;
    constructor(options: JwtOptionInterface);
    sign(id: number): any;
    decodeJwt(token: string): any;
}
