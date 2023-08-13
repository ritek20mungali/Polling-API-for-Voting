const mongoose =require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/Polling_System_api',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=> console.log('db connection estblaished'))
.catch(err=>console.log(err));