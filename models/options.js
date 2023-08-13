const mongoose=require('mongoose');

const optionSchema =new mongoose.Schema({
      question:{
        type:mongoose.Schema.Types.ObjectId
      },
      text:{
        type:String,
        required:true
      },
      vote:{
           type:Number,
           default:0
      },
      link_to_vote:{
        type:String
      }
})

const Option =mongoose.model('Option',optionSchema);
module.exports=Option;