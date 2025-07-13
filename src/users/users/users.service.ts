import { Injectable } from '@nestjs/common';
import { Users } from './Users';

@Injectable()
export class UsersService {
  private users: Users[] = [
    {
      username: 'yaniv',
      password: 'yaniv',
    },
    {
      username: 'inbal',
      password: 'inbal',
    },
    {
      username: 'inbal',
      password: 'inbal',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUserbyUsername(username: string) {
    return this.users.find((user) => user.username == username);
  }
}
