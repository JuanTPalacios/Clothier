//import * as jwt from 'jsonwebtoken';

var jwt = require('jsonwebtoken');
const secret:any = process.env.SECRET_KEY;
import {getUserById} from '../controllers/mainMethods';
import db from '../models/index';

exports.authMiddleware = async (ctx:any, next:any) => {
  const authHeaders = ctx.request.headers['authorization'];
  if (!authHeaders) return ctx.status = 403;
  const tokenType = authHeaders.split(' ')[0];
  const token = authHeaders.split(' ')[1];
  const result = await db.BlackList.findOne({where: {sessionKey: token}});
  if(result){
    ctx.status = 401;
    return;
  }
  try {
    let id;
    if (tokenType === 'Bearer') id = jwt.verify(token, secret);
    if (tokenType === 'id') id = {_id: token};
    const _id = id._id;
    const user = await getUserById(_id);
    if (!user) return ctx.status = 401;
    ctx.request.user = user;
    next();
  } catch (error) {
    ctx.status = 401;
  }
};

// module.exports = authMiddleware;
