import { Injectable, NestMiddleware } from '@nestjs/common';
import { error } from 'console';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateCustomerMiddlware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(403)
        .send({ error: ' No Authentication Token prvided' });
    if (authorization === '123') {
      next();
    } else {
      return res.status(403).send({ error: 'invalid authentication token' });
    }
  }
}
