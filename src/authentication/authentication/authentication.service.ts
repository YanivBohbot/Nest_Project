import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users/users.service';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  async ValidateUser(username: string, password: string) {
    const userDB = await this.userService.findUser(username);
    if (userDB) {
      console.log(userDB);
    }
  }
}
