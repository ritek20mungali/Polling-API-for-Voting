const Option =require('../models/options');
const Question =require('../models/questions');

//create an controller to create options

module.exports.createop =async function(req,res){
   // console.log(req.body,req.params.id)

    const opt=await Option.create({
        text:req.body.text,
        question:req.params.id,
    })
    // it is for adding the vote to option of the id that is given by mongodb by update query and using the string interpolition
    const updateOpt=await Option.findByIdAndUpdate(opt._id,{"link_to_vote":`http://localhost:5000/api/v1/options/${opt._id}/link_to_vote`})
    updateOpt.save()
    // now searching the question so that we can append the option in question-->option array
    const ques=await Question.findById(req.params.id);
    if(ques){
    ques.options.push(updateOpt)
    ques.save()

   //  console.log(ques)

    res.send(ques) 

    }
    else{
        res.send('question does not exists')
    }
        
}


//create an controller to add vote of the particular user

module.exports.link_to_vote =async function(req,res){
   // console.log(req.params.id);

   //find the id of the user whose you have to put the vote and add the vote by using $inc

   let link_vote =await Option.findByIdAndUpdate(req.params.id,{$inc:{vote:1}});

   if(link_vote){
      await link_vote.save();
      res.send(link_vote);
   }
   else{
      res.send("Option des not exists");
   }
   
}


//create an controller to delete options

module.exports.deleteOpt =async function(req,res){
   // console.log(req.params.id);

   //take the id from the params and find it in the db of the user 
   const delopt =await Option.findById(req.params.id)
   .catch(err=>
         { console.log(err);}
   )
    
   if(delopt){
                
          //once the id will be find now check the id which is in the option.question  with the question id  if match then pull it out from the arr
          const seloption =await Question.findByIdAndUpdate(delopt.question,{$pull:{options:req.params.id}});
          await Option.findByIdAndDelete(req.params.id);
          res.send('Option Deleted')
   }

  else{
   res.send("Id Does not exists");
  }
}