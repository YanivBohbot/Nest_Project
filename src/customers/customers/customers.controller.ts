import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDTO } from '../dtos/CreateCustomerDTO';

@Controller('customers')
export class CustomersController {
  constructor(private customerservice: CustomersService) {}

  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) param: number,
    @Req() re: Request,
    @Res() res: Response,
  ) {
    const customer = this.customerservice.findcustomerbyid(param);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ msg: 'Customer Not found' });
    }
  }

  @Get('/search/:id')
  searchCustomerbyID(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerservice.findcustomerbyid(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  CreateCustomer(@Body() createdCustomerDTO: CreateCustomerDTO) {
    this.customerservice.createCustomer(createdCustomerDTO);
  }

  @Get('')
  GetAllCustomers() {
    return this.customerservice.getCustomers();
  }
}
