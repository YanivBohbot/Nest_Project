import { Controller, Get, Post, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('authentication')
export class AuthenticationController {
  @UseGuards(AuthGuard)
  @Post('login')
  async login(@Request() req) {}

  @Get('')
  GetAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    session.authenticated = true;
    return session;
  }
}
