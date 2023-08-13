const express =require('express');
const Router = express.Router();

Router.use('/options',require('./options'));
Router.use('/questions',require('./questions'));


module.exports=Router;