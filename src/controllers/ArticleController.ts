import {Request, Response, Router} from 'express';
export const ArticleController: Router = Router();

ArticleController.get('/', (_req: Request, res: Response) => {
  const articles = [
    {
      id: 1,
      title: 'Article 1',
      body: 'This is the first article',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Article 2',
      body: 'This is the second article',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Article 3',
      body: 'This is the third article',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'Article 4',
      body: 'This is the fourth article',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  res.render('articles', {articles: articles});
});

ArticleController.get('/new', (req: Request, res: Response) => {
  console.log('New Article');
  res.render('articles/new', {text: 'hello new'});
});
