import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('authentication')
export class AuthenticationController {
  @UseGuards(AuthGuard)
  @Post('login')
  async login(@Request() req) {}
}
