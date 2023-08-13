const express=require('express');
const app=express();
const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose=require('mongoose');

const db =require('./config/mongoose');


app.use('/',require('./routes/index'));

// const testSchema=new mongoose.Schema({
//     name:String,
//     description:String,
//     price:Number,
//     age:Number
// })

// const Product= new mongoose.model('Product',testSchema);
//create api
// app.post('/v1/create/product/new', async (req, res) => {
//     try {
//       const product = await Product.create(req.body);
//       res.status(201).json({
//         success: true,
//         product: product,
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({
//         success: false,
//         message: 'An error occurred while creating the product.',
//       });
//     }
//   });

//   //read api

//   app.get('/v1/create/products',async (req,res)=>{
//      const products = await Product.find();

//      res.status(200).json({
//         success:true,
//         products:products
//      })
//   })

// //update id

// app.put('/v1/create/products/:id',async(req,res)=>{
//     let product= await Product.findById(req.params.id);
//     product=await Product.findByIdAndUpdate(req.params.id,req.body)

//     res.status(200).json({
//         success:true,
//         product:product
//      })
// })

// //delete 
// app.delete('/v1/delete/products/:id',async(req,res)=>{
//     let product= await Product.findById(req.params.id);
//     product.deleteOne();

//     res.status(200).json({
//         success:true,
//         product:product
//      })
// })
  
app.listen(5000,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('server is running at port 5000')
    }
})