import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from '../dtos/CreateCustomerDTO';

@Injectable()
export class CustomersService {
  private customers = [
    {
      id: 1,
      email: 'yaniv@gmail.com',
      createdAt: new Date(),
      name: 'yaniv',
    },
    {
      id: 2,
      email: 'yaniv@gmail.com',
      createdAt: new Date(),
      name: ' oshrat',
    },
  ];

  findCustomer() {
    return {
      id: 1,
      email: 'yaniv@gmail.com',
      createdAt: new Date(),
      name: 'inbal',
    };
  }

  findcustomerbyid(id: number) {
    return this.customers.find((user) => user.id == id);
  }

  createCustomer(customerDTO: CreateCustomerDTO) {
    this.customers.push(customerDTO);
  }

  getCustomers() {
    return this.customers;
  }
}
