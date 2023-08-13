const Option =require('../models/options');
const Question =require('../models/questions');



//create an controller for creating the questions
module.exports.create =async function(req,res){
       // console.log(req.url);
       // console.log(req.body);

       //creating a new question 
       let ques =await Question.create(req.body)
       .catch(err=>
              { console.log(err);}
        );

        //sending the response
       res.send(ques);
}


//creating a controller to show the delatis of the particular question
module.exports.showDetails =async function(req,res){
       // console.log(req.params.id);

       //finding the details with respect to the id
       const details =await Question.findById(req.params.id)
       .populate('options');
       
       //if the details are find then send the response

       if(details){
       res.send(details);}else{
              res.send("ID doesnt exixt");
       }
}


module.exports.deleteQues =async function(req,res){
       // console.log(req.params.id);

       //find the id of the partuclar option in the db
       const delq =await Question.findById(req.params.id)
       .catch(err=>
             { console.log(err);}
       )

        
       if(delq){

              //once the id will be found delete the particular optioon from the database
              await Question.deleteOne({_id:req.params.id}).catch(err=>
                     { console.log(err);}
               )

               await Option.deleteMany({question:req.params.id}).catch(err=>
                     { console.log(err);}
               )

               res.send("Question Deleted")
       }

      else{
       res.send("Question Does not exists");
      }
}