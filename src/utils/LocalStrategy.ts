import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from 'src/authentication/authentication/authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('Auth_SERVICE') private readonly authService: AuthenticationService,
  ) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.authService.ValidateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
