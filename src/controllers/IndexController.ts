import {Request, Response, Router} from 'express';
export const IndexController: Router = Router();

IndexController.get('/', (_req: Request, res: Response) => {
  // res.send('Hello World!');
  res.render('index');
  console.log('Index Controller');
});
