import { Inject, Injectable } from '@nestjs/common';
import { SerializeUser, Users } from './Users';
import { CreateUserDTO } from '../dto/createUsers.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/TypeOrm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private users: Users[] = [];

  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}

  getUsers() {
    return this.users.map((user) => new SerializeUser(user));
  }

  getUserbyUsername(username: string) {
    return this.users.find((user) => user.username == username);
  }

  getUserById(id: number) {
    this.users.find((user) => user.id === id);
  }

  createUser(createuserdto: CreateUserDTO) {
    const newUser = this.UserRepository.save(createuserdto);
    return this.UserRepository.save(newUser);
  }
  findUser(username: string) {
    return this.UserRepository.findOne({ username });
  }
}
