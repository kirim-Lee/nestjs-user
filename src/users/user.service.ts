import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { GetUserInput, GetUserOutput } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
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
}
