// Endpoint for querying the fibonacci numbers

import { fibonacci } from './fib'; 
import { Request, Response } from 'express';

export default (req: Request, res: Response): void => {
  const { num } = req.params;

  const parsedNum = parseInt(num); // Parse the input to a number

  const fibN = fibonacci(parsedNum);
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  } else {
    result = `fibonacci(${parsedNum}) is ${fibN}`;
  }

  res.send(result);
};