import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { User } from 'src/users/entities/user.entity';
import { PRIVATE_KEY } from './const';

@Injectable()
export class JwtService {
  async getJwt(user: Pick<User, 'email' | 'role'>) {
    try {
      const token = await jwt.sign(user, PRIVATE_KEY);
      return token;
    } catch (error) {
      console.log(error);
      return new InternalServerErrorException();
    }
  }
}
