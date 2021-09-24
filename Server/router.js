'use strict';

const Router = require('koa-router');
const router = new Router();
const mainMethods = require('./controllers/mainMethods');

//Get all users
router.get('/users', mainMethods.getUsers);
//Register new User
router.post('/users', mainMethods.postUsers);

//Get all items
router.get('/items', mainMethods.getItems);
//Register new items
router.post('/items', mainMethods.postItems);

//Get all adquisitions
router.get('/adq', mainMethods.getADQ);
// Register new adquisition
router.post('/adq', mainMethods.postADQ);

//Get all adquisitions
router.get('/follow', mainMethods.getFollows);
//New Follow
router.post('/follow', mainMethods.followUser);

//Zappos DB populator
router.get('/zappos', mainMethods.zapposFilter);
router.post('/zappos', mainMethods.postItemsZappo );

module.exports = router;
