import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/listUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Controller('/user')
export class UserController {
  constructor(private UserRepository: UserRepository) {}

  @Post()
  async createUser(@Body() data: CreateUserDTO) {
    const user = new UserEntity();
    user.email = data.email;
    user.pass = data.pass;
    user.name = data.name;
    user.id = uuid();

    this.UserRepository.create(user);

    return {
      message: 'Usuario criado',
      id: user.id,
    };
  }

  @Get('/list')
  async listUser() {
    const users = await this.UserRepository.list();

    return users.map((user) => new ListUserDTO(user.name, user.id));
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    const user = await this.UserRepository.update(id, data);

    return {
      message: 'Usuario atualizado',
      id: user.id,
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    const user = await this.UserRepository.remove(id);

    return {
      message: 'Usuario removido',
      id: user.id,
    };
  }
}
