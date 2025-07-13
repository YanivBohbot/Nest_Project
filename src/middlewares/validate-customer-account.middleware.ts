import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class ValidateCustomerMiddlware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const validAccount = req.headers['validaccount'];
    if (validAccount) {
      next();
    } else {
      res.status(401).send({ error: 'Error account is invalid' });
    }
  }
}
