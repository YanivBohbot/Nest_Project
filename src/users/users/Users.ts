import { Exclude } from 'class-transformer';

export interface Users {
  username: string;
  password: string;
}

export class SerializeUser {
  username: string;
  @Exclude()
  password: string;
}
