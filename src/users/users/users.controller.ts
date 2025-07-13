import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SerializeUser } from './Users';
import { UserNotFoundException } from 'src/execptions/UserNotFoundExceptions';
import { CreateUserDTO } from '../dto/createUsers.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly UsersService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers() {
    return this.UsersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('username/:username')
  getbyUsername(@Param('username') username: string) {
    const user = this.UsersService.getUserbyUsername(username);
    if (user) return new SerializeUser(user);
    else throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpException)
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const user = this.UsersService.getUserById(id);
    if (user !== undefined && user !== null) return new SerializeUser(user);
    else {
      throw new UserNotFoundException('User Not fonud', 400);
    }
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.UsersService.createUser(createUserDTO);
  }
}
