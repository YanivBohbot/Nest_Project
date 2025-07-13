import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { MiddlewareBuilder } from '@nestjs/core';
import { ValidateCustomerMiddlware } from 'src/middlewares/validate-customer.middleware';
import path from 'path';
import { NextFunction } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        ValidateCustomerMiddlware,
        ValidateCustomerMiddlware,
        (re: Request, res: Response, next: NextFunction) => {
          console.log('last middleware');
          next();
        },
      )
      .exclude({ path: './create', method: RequestMethod.POST })
      .forRoutes(
        // {
        //   path: 'customers/search/:id',
        //   method: RequestMethod.GET,
        // },
        // {
        //   path: 'customers/:id',
        //   method: RequestMethod.GET,
        // },
        CustomersController,
      );
  }
}
