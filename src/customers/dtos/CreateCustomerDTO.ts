import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDTO } from './CreateAddressDTO';

export class CreateCustomerDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsDate()
  createdAt: Date;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateAddressDTO)
  address: CreateAddressDTO;
}
