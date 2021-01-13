import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

enum Role {
  Host = 'Host',
  Listener = 'Listener',
}

registerEnumType(Role, { name: 'Role' });

@Entity()
@ObjectType()
export class User extends CoreEntity {
  @Column()
  @Field(type => String)
  @IsEmail()
  email: string;

  @Column()
  @Field(type => String)
  @IsString()
  password: string;

  @Column({ default: Role.Listener })
  @Field(type => Role)
  @IsEnum(Role)
  role: Role;

  @BeforeInsert()
  @BeforeUpdate()
  async mutatePassword() {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        console.log(error);
        new InternalServerErrorException();
      }
    }
  }
}
