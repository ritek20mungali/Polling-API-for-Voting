const express =require('express');
const Router = express.Router();

const {createop,link_to_vote,deleteOpt}=require('../../../controller/options_controller')

Router.post('/createop/:id',createop);
Router.get('/:id/link_to_vote',link_to_vote);
Router.delete('/delete/:id',deleteOpt);

module.exports=Router;