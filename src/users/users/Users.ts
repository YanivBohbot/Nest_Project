import { Exclude } from 'class-transformer';

export interface Users {
  id: number;
  username: string;
  password: string;
}

export class SerializeUser {
  id: number;
  username: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<SerializeUser>) {
    Object.assign(this, partial);
  }
}
