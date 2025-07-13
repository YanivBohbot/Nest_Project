import { Controller, Get, Inject } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(@Inject('USER SERVICE') private UsersService: UsersService) {}

  @Get('')
  getUsers() {
    return this.UsersService.getUsers();
  }
}
