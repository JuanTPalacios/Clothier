'use strict';

import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../models/index';
import {Context} from 'koa';
const SECRET_KEY:any  = process.env.SECRET_KEY;

require('dotenv').config();

//User Methods
export async function getUsers (ctx:any) {
  try {
    ctx.body = await db.users.findAll({
      include: [
        {
        model: db.ADQ,
        attributes: ['itemPrimaryKey'],
        include: {
          model: db.items,
          attributes: ['title', 'category', 'brand', 'image', 'productId', 'productUrl', 'primaryKey']
          },
        }
      ],
      attributes: ['firstName', 'lastName', 'primaryKey', 'username']
    }); 
    ctx.status = 200;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

export async function postUsers (ctx : any) {
  const user = ctx.request.body;
  const pass = await bcrypt.hash(user.password, 10);
  try {
    await db.users.create({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password: pass,
      })
    ctx.status = 201;
    ctx.body = await db.users.findOne({
      where: {email: user.email},
      attributes: ['primaryKey']
    })
  } catch (err) {
    console.log(err);
    ctx.body = err;
    ctx.status = 500;
  }
};

//User Methods
export async function getUserById (id: number) {
  try {
    return await db.users.findOne({
      where: { primaryKey: id},
      include: [
        {
        model: db.ADQ,
        attributes: ['itemPrimaryKey'],
        include: {
          model: db.items,
          attributes: ['title', 'category', 'brand', 'image', 'productId', 'productUrl', 'primaryKey']
        }
      },
      {
        model: db.Follows,
        attributes: ['userPrimaryKey'],
        include: {
          model: db.users,
          attributes: ['firstName', 'lastName']
        }
      }
    ],
      attributes: ['firstName', 'lastName', 'primaryKey']
    }); 
  } catch (err) {
    return null;
  }
};

export async function profile (ctx : any) {
  try {
    const user = ctx.request.user;
    ctx.status = 200;
    ctx.body = user;
  } catch {
    ctx.status = 404
    ctx.body = {error: 404, message: 'Resource not found' };
  }
};

//Item Methods
export async function getItems (ctx : any) {
  try {
    ctx.body = await db.items.findAll({
      attributes: ['title', 'category', 'brand', 'image', 'productId', 'productUrl', 'primaryKey', 'createdAt']
    }); 
    ctx.status = 200;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

export async function getOneItem(ctx : any) {
  const id = ctx.request.body.ItemId;
  try {
    const body = await db.items.findOne({
      where: { primaryKey: id },
      attributes: ['title', 'category', 'brand', 'image', 'productId', 'productUrl', 'primaryKey', 'createdAt']
    }); 
    ctx.status = 200;
    ctx.body = body;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

interface itemProp {
  title: string;
  category: string;
  brand: string;
  image: string;
  productId: number;
  productUrl: string;
  primaryKey: number;
  createdAt: string;
}

export async function postItems(ctx: any) {
  const body = ctx.request.body;
  try {
    await body.forEach(({title,category, brand, image, productId, productUrl, primaryKey, createdAt} : itemProp) => {
      db.items.create({
        title,
        category,
        brand,
        image,
        productId,
        productUrl,
        primaryKey,
        createdAt
        })
      })
      ctx.status = 201;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

//ADQ Methods (creates relationship between a user and multiple items)
export async function getADQ(ctx : any) {
  try {
    ctx.body = await db.ADQ.findAll(); 
    ctx.status = 200;
  } catch (err) {
    ctx.body = err;
    ctx.status = 404;
  }
};

export async function postADQ(ctx : any) {
  const body = ctx.request.body;
  try {
    await db.ADQ.create({
        userPrimaryKey: body.UserId,
        itemPrimaryKey: body.ItemId,
      })
    ctx.status = 201;
  } catch (err) {
    ctx.body = err;
    ctx.status = 404;
  }
};

export async function removeADQ(ctx : any) {
  const body = ctx.request.body;
  try{
    await db.ADQ.destroy({
      where: {
        userPrimaryKey: body.UserId,
        itemPrimaryKey: body.ItemId,
      }
    })
    ctx.status = 201;
  }catch(er){
    ctx.body = er;
    ctx.status = 404;
  }
  
}

// Follow Users Method

export async function followUser(ctx:any) {
  const body = ctx.request.body;
  try {
    const currentUser = await db.users.findOne({where: {primaryKey: body.currentUserId}})
    const profileUser = await db.users.findOne({where: {primaryKey: body.profileUser}})
    currentUser.addUser(profileUser);
    ctx.status = 201;
    return currentUser.getUser()
  } catch (err) {
    ctx.status = 404;
  }
};

export async function getFollows(ctx: any){
  try {
    ctx.body = await db.Follows.findAll()
    ctx.status = 200;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

//LogIn method
export async function login (ctx : any){
  const { email , password } = ctx.request.body;
  try {
    const user = await db.users.findOne({
      where: { email: email}});
    const validatedPass = await bcrypt.compare(password, user.password);
    //const validatedPass = (password === user.dataValues.password);
    if (!validatedPass) throw new Error();
    const accessToken = JWT.sign({ _id: user.dataValues.primaryKey }, SECRET_KEY);
    ctx.status = 200
    ctx.body = { accessToken };
  } catch (error) {
    ctx.status = 401
    ctx.body = { error: '401', message: error };
  }
};
interface logoutContext extends Context {
  body: {
    status: string;
    message: string;
  }
}

export async function logout (ctx: logoutContext) {
  const authHeaders = ctx.request.headers['authorization'];
  if (!authHeaders) return ctx.status = 403;
  const token = authHeaders.split(' ')[1];
  await db.BlackList.create({sessionKey: token});
};
