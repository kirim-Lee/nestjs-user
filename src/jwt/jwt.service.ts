import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTIONS } from 'src/common/const';
import { UserService } from 'src/users/user.service';
import { JwtOptionInterface } from './jwt.interface';

@Injectable()
export class JwtService {
  constructor(@Inject(CONFIG_OPTIONS) private options: JwtOptionInterface) {}

  sign(id: number) {
    return jwt.sign({ id }, this.options.privateKey);
  }

  decodeJwt(token: string) {
    return jwt.verify(token, this.options.privateKey);
  }
}
