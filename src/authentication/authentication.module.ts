import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { UsersService } from 'src/users/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/TypeOrm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthenticationController],
  providers: [
    {
      provide: 'Auth_SERVICE',
      useClass: AuthenticationService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
  ],
})
export class AuthenticationModule {}
