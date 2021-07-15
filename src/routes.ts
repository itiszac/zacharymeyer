import {Application, Router} from 'express';

import {IndexController} from './controllers/IndexController';
import {ArticleController} from './controllers/ArticleController';

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/articles', ArticleController],
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
