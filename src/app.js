require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use('/api/v1', router);
routes(router);

const host = 'localhost';
const port = 3001;

const server = app.listen(port, host);

server.on('listening', () => {
  console.log('Express listening on http://%s:%s', host, port);
});
