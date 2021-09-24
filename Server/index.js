const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router');
const db = require('./models/index.js');

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

const PORT = 3001;

(async function bootstrap () {
  await db.sequelize.sync();
  app.listen(PORT);
  console.log(`connected at port ${PORT}`)
})();
