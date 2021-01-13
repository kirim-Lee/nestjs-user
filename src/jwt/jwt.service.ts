import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTIONS } from 'src/common/const';
import { User } from 'src/users/entities/user.entity';
import { JwtOptionInterface } from './jwt.interface';

@Injectable()
export class JwtService {
  constructor(@Inject(CONFIG_OPTIONS) private options: JwtOptionInterface) {}

  async getJwt(user: Pick<User, 'email' | 'role'>) {
    try {
      const token = await jwt.sign(user, this.options.privateKey);
      return token;
    } catch (error) {
      console.log(error);
      return new InternalServerErrorException();
    }
  }
}
