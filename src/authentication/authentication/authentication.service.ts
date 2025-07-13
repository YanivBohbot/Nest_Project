import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users/users.service';
import { comparePassword } from 'src/utils/brcypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async ValidateUser(username: string, password: string) {
    const userDB = await this.userService.findUser(username);
    if (userDB && userDB.password === password) {
      const matched = comparePassword(password, userDB.password);
      if (matched) {
        console.log('User Validation succes');
        return userDB;
      }
      return null;
    }
    return null;
  }
}
