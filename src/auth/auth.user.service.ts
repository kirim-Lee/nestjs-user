import { Injectable } from '@nestjs/common';
import { JwtService } from 'src/jwt/jwt.service';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthUserService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async getUser(token: string): Promise<User | null> {
    try {
      const decode = this.jwtService.decodeJwt(token);

      if (typeof decode === 'object' && 'id' in decode) {
        const result = await this.userService.getUser({ id: decode.id });
        if (result.ok && result.user) {
          return result.user;
        }
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
