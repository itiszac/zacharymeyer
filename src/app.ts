import express, {Application} from 'express';
import {routes} from './routes';

export const app: Application = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

routes(app);
