var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/ProjectApp/dist' ));

 var session = require('express-session');
app.use(session({secret:"SuperSecret"}));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
//define the database schema:
var Schema = mongoose.Schema;
var DaySchema = new mongoose.Schema({
 day: {type:Number,required:true},
 
 
 Someting:{type:String},
 //text: { type: String }, 
 events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
eventsContent:[{ type: String}],
 //NameWhoCommnet:[{type: String}]
 
},{timestamps: true})
mongoose.model('Day', DaySchema); // We are setting this Schema in our Models as 'User'
var day = mongoose.model('Day');

//user
var UserSchema = new mongoose.Schema({
 UserName: {type:String},
 
 
},{timestamps: true})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var user = mongoose.model('User');
//One to many schema

var EventSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _events: {type: Schema.Types.ObjectId, ref: 'Day'},
 events: { type: String,required:true,minlength:3},
 eventsDetail: {type: String},
 name:{type:String},
 
}, {timestamps: true });
mongoose.model('Event', EventSchema); // We are setting this Schema in our Models as 'User'
var event = mongoose.model('Event');

//temporary need:
app.post('/api/addQues', function(req, res){

  	console.log("may i be server to add days?");
  	var newDay = new day({day:req.body.day});
  			newDay.save(function(err) {
  
    if(err) {
      console.log('something went wrong');
      res.json(err);
      // res.json({message: "error exist", data: {}});
    } else { 
      
      console.log('successfully added a question!',newDay);
      
      res.json(newDay);

 	//res.json(PersonArray);
 	
	}
})	
  
})

app.post('/api/addEvent', function(req, res){

  	console.log("may i be server to add event?");
  	console.log("what is req.body",req.body);
  	day.findOne({_id: req.body._id}, function(err, post){
  		
  	var newEvent = new event();
  		newEvent.events = req.body.event;
  			
  	 // now save both to the DB
        newEvent.save(function(err){
        	//newQuestion.options.push(NewPoll);
        	//console.log("what is newDay Before PUSH",newDay);
        	post.events.push(newEvent);
          console.log("what is post: ",post);
        	//console.log("what is newDay (events array) After PUSH: ",newDay);
        	
        
	               post.save(function(errtwo){
	               	if(errtwo){
	               		console.log('ErrorTwo');
	                        res.json(errtwo);
	               	}else{
	               	if(err) {
	                          console.log('Error');
	                        res.json(err);
	                     }else{
	                     		
			                     	
			                     	console.log("save event successfully!");
			                          res.json(post);
			                     }
			                } 
			               })
	            		
            	});
  })
})
app.get('/api/getDays', function(req, res){

  	console.log("may i be server to get all day?");
  	day.find({}).sort('day').exec(function(err,results){
 		   if(err) {
      console.log('something went wrong');
      res.json(err);
     
    } else { 
      
	      console.log('successfully find all days!');
	      res.json(results);

 	
 	
	}
 	})
	
  
})
app.get('/api/getallEvent/:_id', function(req, res){

  	console.log("may i be server to get all events?");
 
	console.log("test one!!! ", req.params._id)
   day.findOne({_id:req.params._id})
   .populate('events')
   .exec(function(err, post) {
 		console.log("post before render to index: "+post);
 		res.json(post);
	});
  })

// app.get('/api/getallEventTwo/:_id', function(req, res){

//   	console.log("may i be server to get all events of daytwo?");
 
// 	console.log("test one of day two!!! ", req.params._id)
//    day.findOne({_id:req.params._id})
//    .populate('events')
//    .exec(function(err, post) {
//  		console.log("post before render to index of day two: "+post);
//  		res.json(post);
// 	});
//   })

app.get('/api/ShowSpecificQues/:_id', function(req, res){
	console.log("what is req.body._id: ",req.params._id);
  day.findOne({_id:req.params._id}, function(err, results) {
         if(err) {
      console.log('something went wrong');
      res.json(err);
      // res.json({message: "error exist", data: {}});
    } else { 
      
      console.log('successfully find Specific question!');
      res.json(results);

  //res.json(PersonArray);
  
  }
      })
  //res.json({message: "Success", data: {}});
})

app.delete('/api/delete/:_id', function(req, res){
	console.log("may i be delete in server?");
	console.log("what the req.params._id is: ",req.params._id);
	
    	
			    		day.remove({_id:req.params._id}, function(errtwo){
					   if(errtwo) {
						      console.log('something went wrong');
						      res.json(errtwo);
			      
			    	} else { 
			      			console.log('delete work');
			     		res.json({message:'deleted'});
					}
				})
   
	//
  
  
})     

// app.post('/api/eventsdelete/:_id', function(req, res){
//   console.log("may i be server to delete event?");
//     console.log("what is req.params._id",req.params._id);
//     day.findOne({_id: req.params._id}, function(err, post){
//       console.log("what is post: ",post);
    
        
//      // now save both to the DB
//         event.findOne({_id: req.params._id}, function(err, eventpost){
//           //newQuestion.options.push(NewPoll);
//           //console.log("what is newDay Before PUSH",newDay);
//           eventpost.events.p(newEvent);
//           //console.log("what is newDay (events array) After PUSH: ",newDay);
          
        
//                  post.save(function(errtwo){
//                   if(errtwo){
//                     console.log('ErrorTwo');
//                           res.json(errtwo);
//                   }else{
//                   if(err) {
//                             console.log('Error');
//                           res.json(err);
//                        }else{
                          
                            
//                             console.log("save event successfully!");
//                                 res.json(post);
//                            }
//                       } 
//                      })
                  
//               });
//   })
// })
  //
  
  

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./ProjectApp/dist/index.html"))
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})