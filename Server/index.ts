import Koa from 'koa';
require('dotenv').config();
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router');
import database from './models/index';

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(bodyParser());
app.use(router.routes());


const PORT = 3001;
(async function bootstrap () {
  await database.sequelize.sync();
  
})();
const App = app.listen(PORT);
console.log(`connected at port ${PORT}`)
module.exports = App;
