import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DaytwoComponent } from '.././daytwo/daytwo.component';
@Component({
  selector: 'app-dayone',
  templateUrl: './dayone.component.html',
  styleUrls: ['./dayone.component.css']
})
export class DayoneComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  	this.getAllDays();
  	//this.passID();
  	//this.questionsubmit();
  	this.generateWhatDay();
  	//this.getSpecificQuestion(this.tempId);
  	//this.getallEvents(this.tempId);
  	
  }
  ngOnChanges(changes: SimpleChanges) {
  	console.log("may i be onChanges? ");
  	this.PreSetting();
  	this.getallEvents(this.tempId);
	}
 @Input() myDays;
  whatDay = this.myDays;
  tempEvent = {_id:"",event:"",whatday:this.whatDay};
  errors = {};
  ishidden = "none";
  ishiddenEvent = "block";
  ishiddenReminder = "none";
  eventcolor = "blue";
  remindercolor = "white";
  modal = document.getElementById('myModal');
  btn = document.getElementById("myBtn");
  StoreEvent = {};
  tempArray = [];
  tempArrayTwo = [];
  passday ={day:this.whatDay};
  tempId = "5a976e13419a7eb3f5e16795";
  span = document.getElementsByClassName("close")[0];
  tempQuestion = {day:1};
  passToAfter = [];
  tempIdAfter = "";
  tempArrayForDays = [];
   tempdata = {};
  cityid = 1689498;
generateWhatDay(){
	console.log("generateWhatday run");
  	this.whatDay = this.myDays;
  	this.tempEvent.whatday = this.myDays;
  	//conenect to API
  	this.getTasksFromService();

  	//console.log("what is whatDay in generateWhatDay? ",this.whatDay);
  }
  clearEvent(){
  	this.tempArrayTwo = [];
  	//this.getallEvents(this.tempId);
  }
  getAllDays(){
  	console.log("may i be getalldays in dayOne?");
  	let observable = this._httpService.getdayInService();
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		this.tempArrayForDays = [];
    		
    		console.log("the responsedata in getallDay In DayOne is : ",responseData);
    		this.tempArrayForDays.push(responseData);

    		console.log(this.tempArrayForDays);
    		console.log("whatDay before define the id? ",this.whatDay)
    		this.tempId = this.tempArrayForDays[0][this.whatDay]._id;
    		//this.tempIdAfter = this.tempArray[0][this.whatDay-1];
    		console.log("In getAllDays of dayOne, 123 tempId is : ",this.tempId);
    		this.tempEvent._id = this.tempId;
    		//this._router.navigate(['/']);
    	// 	for(var i = 0; i<this.tempArray[0].length;i++){
    	// 		var date = new Date(this.tempArray[0][i])
    	// }
    	});
  }
//temporary need :
questionsubmit(){
  	console.log("may i be question submit?");
  	let observable = this._httpService.addQuestion(this.tempQuestion);
    	observable.subscribe(responseData=>{
    	
    		console.log("the responsedata in questionsubmit is : ",responseData);
    		
    	});
  }

  
  dayonebuttonclick(){
  	console.log("may i be dayonebuttonclick ?");
  	this.ishidden = "block";
  	//this.modal.style.display = "block";
  	//console.log("test one",this.modal.style.display);

  }
  closebuttonclick(){
  	this.ishidden = "none";
  }

  eventsubmit(){
  	 	console.log("may i be event submit?");
  	 	console.log("what is tempEvent",this.tempEvent);

  	let observable = this._httpService.addEvent(this.tempEvent);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in eventsubmit is : ",responseData);
    		this.errors = responseData;
    		this.getallEvents(this.tempId);
    		//this.StoreEvent = responseData;
    		//this._router.navigate(['/']);
    	});
  }
  switchtore(){
  	this.ishiddenEvent = "block";
  	this.ishiddenReminder = "none";
  	this.eventcolor = "blue";
  	this.remindercolor = "white";

  }
  switchtoev(){
  	this.ishiddenEvent = "none";
  	this.ishiddenReminder = "block";
  	this.eventcolor = "white";
  	this.remindercolor = "blue";
  }
  PreSetting(){
  	this.whatDay = this.myDays;
  	if (this.whatDay-1>=0){
  		this.tempEvent._id = this.tempArrayForDays[0][this.whatDay]._id;
    }else{
    	this.tempEvent._id = this.tempArrayForDays[0][0]._id;
    }

  	
  	this.tempId = this.tempArrayForDays[0][this.whatDay]._id;
  	console.log("Successfully PreSetting, the day is: ",this.whatDay," the tempId is : ",this.tempId);
  }
  getallEvents(id){
  	
  	console.log("what is whatDay After press Show Event: ",this.whatDay);
  	console.log("what is tempId After press Show Event: ",this.tempId);
  	console.log("may i be getallEvent in DayOne?",id);
  	console.log("test two!!! ",this.tempId);
  	let observable = this._httpService.getAlleventsInService(id);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		this.tempArray = [];
    		
    		console.log("the responsedata in getall events is : ",responseData);
    		this.tempArray.push(responseData);
    		console.log("the tempArray in getall events is : ",this.tempArray);
    		 this.tempArrayTwo = this.tempArray[0].events;
    		 console.log("what is temparrayTwo: ",this.tempArrayTwo);
    		 //nested request
			   	//console.log("may i be getallEventAfter?");
			   //	console.log("what is tempIdafter ? ",this.tempIdAfter);
			  
    		// //sort by desc
    		// this.tempArrayTwo = this.tempArrayTwo.sort((a,b) => {
    		// 	return b.likes-a.likes;
    		// });
    		//console.log(this.tempArray);
    		//this._router.navigate(['/']);
    	});
  
  	}

  	getSpecificQuestion(id){
  	console.log("may i be getSpecificquestion?");
  	console.log("what is id now?",id);
  	let observable = this._httpService.getSpecificquestionInService(id);
    	observable.subscribe((responseData:any)=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in getSpecificQuestion is : ",responseData);
    		this.whatDay = responseData.day;
    		//console.log("what is tempObj is : ",this.tempObj);
    		//this.tempArray.push(responseData);
    		//console.log(this.tempArray);
    		//this._router.navigate(['/']);
    	});
  }
  getTasksFromService(){
       let observable = this._httpService.requestDojo(this.cityid);
       observable.subscribe(data => {
         console.log("what is data send back  : ",data);
         this.tempdata = data;
       });
    }
  // eventsdelete(id){
  // 	console.log("may i be eventdelete? ");
  // 	let observable = this._httpService.DeleteEventsInService(id);
  //   	observable.subscribe(responseData=>{
  //   		//this.tempAuthors.push(responseData);
    		
    		
  //   		console.log("the responsedata in questiondelete is : ",responseData);
  //   		this.getAllQuestion();

  //   	});
  // }
  gosomewhere(){
  	this._router.navigate(['/sanjose']);
  }
  //  storedafterSearch = [];
  //  authorInSearchBar = "";
  // searchsubmit(){
  //   	console.log("may i be searchsubmit?");
  //   	//this.tempAuthors = [];
  //   	var tempObj = [];
  //   	console.log("before search, what is temArray",this.tempArray);
  //   	for(var i = 0; i<this.tempArray[0].length;i++){
  //   		//console.log("includes works");
	 //    		if (this.tempArray[0][i].includes(this.authorInSearchBar) ){
	 //    			//console.log("includes works");
	 //    			tempObj.push( this.tempArray[0][i]);
	    			
	 //    		}
	    		
	 //    	}
	 //    	this.tempArray[0] = [];
	 //    	this.tempArray[0]=tempObj;
	 //    	//this.tempArrayTwo = this.tempArray;
	 //    	//this.storedafterSearch = tempObj;
	 //    	if (this.authorInSearchBar == ""){
	 //    		this.getallEvents(this.tempId);
	 //    	}
	 //    	//this.tempArray[0].filter(this.checkIfInclude);
  //   }
}
