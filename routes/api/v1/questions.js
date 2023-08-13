const express =require('express');
const Router = express.Router();

const {create,showDetails,deleteQues}=require('../../../controller/questions_controller')

Router.post('/create',create);
Router.get('/view/:id',showDetails);
Router.delete('/delete/:id',deleteQues);


Router.use('/options',require('./options'))


module.exports=Router;