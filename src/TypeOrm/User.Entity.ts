import { type } from 'os';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
}
