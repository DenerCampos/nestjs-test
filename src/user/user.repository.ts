import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable() //transforma em um provider no nest
export class UserRepository {
  private users: UserEntity[] = [];

  async create(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async emailExist(email: string): Promise<boolean> {
    const user = this.users.find((user) => user.email === email);

    return user !== undefined;
  }

  async update(id: string, data: Partial<UserEntity>) {
    const user = this.findById(id);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async remove(id: string): Promise<UserEntity> {
    const user = this.findById(id);

    this.users = this.users.filter((user) => user.id !== id);

    return user;
  }

  private findById(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error(`Usuario não existe: ${id}`);
    }

    return user;
  }
}
