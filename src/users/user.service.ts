import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from 'src/jwt/jwt.service';
import { EditAccountInput, EditAccountOutput } from './dtos/edit-account.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const existUser = await this.users.findOne({ email });

      if (existUser) {
        return { ok: false, error: 'email is already exist' };
      }

      await this.users.save(this.users.create({ email, password, role }));

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  }

  async getUser({ id }: GetUserInput): Promise<GetUserOutput> {
    try {
      const user = await this.users.findOne(id);
      if (!user) {
        return { ok: false, error: 'user is not exist' };
      }

      return {
        ok: true,
        user,
      };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    try {
      const user = await this.users.findOne(
        { email },
        { select: ['id', 'email', 'password'] },
      );

      if (!user) {
        return { ok: false, error: 'user is not exist' };
      }

      const compare = await bcrypt.compare(password, user.password);

      if (!compare) {
        return { ok: false, error: 'password is not match' };
      }

      const token = this.jwtService.sign(user.id);

      return { ok: true, token };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  }

  async editProfile(
    { id }: User,
    editAccountInput: EditAccountInput,
  ): Promise<EditAccountOutput> {
    try {
      const user = await this.users.findOne(id);

      if (!user) {
        return { ok: false, error: 'your info is not exist' };
      }

      if (editAccountInput.email) {
        const existEmailUser = await this.users.findOne({
          email: editAccountInput.email,
        });
        if (existEmailUser) {
          return { ok: false, error: 'choosen email is accupied' };
        }
      }

      Object.keys(editAccountInput).forEach(key => {
        user[key] = editAccountInput[key];
      });

      await this.users.save(user);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  }
}
