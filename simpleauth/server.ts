import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { indexHandler, secretHandler, loginHandler } from './routeHandlers';
import { checkAuth } from './middleware';

const app = express();
const PORT = 80;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', indexHandler);
app.get('/secret', checkAuth, secretHandler);

app.post('/login', loginHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));