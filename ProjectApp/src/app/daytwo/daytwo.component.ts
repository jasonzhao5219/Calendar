import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-daytwo',
  templateUrl: './daytwo.component.html',
  styleUrls: ['./daytwo.component.css']
})
export class DaytwoComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {

  	this.getAllDays();
  	this.generateWhatDay();
  	//this.getSpecificQuestion();
  	//this.getallEvents(this.tempId);
  }
  @Input() myDays;
  whatDay = this.myDays+1;
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
  tempId = "";
  span = document.getElementsByClassName("close")[0];
  tempQuestion = {day:5};
//temporary need :
questionsubmit(){
  	console.log("may i be question submit?");
  	let observable = this._httpService.addQuestion(this.tempQuestion);
    	observable.subscribe(responseData=>{
    	
    		console.log("the responsedata in questionsubmit is : ",responseData);
    		
    	});
  }
  generateWhatDay(){
  	this.whatDay = this.myDays+1;
  }
  getAllDays(){
  	console.log("may i be getalldays in day Two?");
  	let observable = this._httpService.getdayInService();
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		this.tempArray = [];
    		
    		console.log("the responsedata in getallDay In DayTwo is : ",responseData);
    		this.tempArray.push(responseData);

    		console.log(this.tempArray);
    		this.tempId = this.tempArray[0][this.whatDay-1];
    		console.log("In day two, tempId is : ",this.tempId);
    		//this._router.navigate(['/']);
    	// 	for(var i = 0; i<this.tempArray[0].length;i++){
    	// 		var date = new Date(this.tempArray[0][i])
    	// }
    	});
  }
   // passID(){
	  // 	this._route.params.subscribe((params: Params) => {
	  		
	  // 		if (params['id'] == undefined){
	  // 			this.tempId ="5a9733ca25e374b03bf3ed79";
	  // 		}else{
	  // 			this.tempId = params['id'];
	  // 			this.tempEvent._id = params['id']
	  // 		}
	  // 		console.log("show one id is: ",this.tempId);
	  // 	});
  	// }
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
    getallEvents(id){

  	console.log("may i be getallEvent in day two?",this.tempId);

  	let observable = this._httpService.getAlleventsInService(id);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		this.tempArray = [];
    		
    		console.log("the responsedata in getall events of dayTwo is : ",responseData);
    		this.tempArray.push(responseData);
    		console.log("the tempArray in getall events of dayTwo is : ",this.tempArray);
    		 this.tempArrayTwo = this.tempArray[0].events;
    		 console.log("what is temparrayTwo Of dayTwo: ",this.tempArrayTwo);
    		// //sort by desc
    		// this.tempArrayTwo = this.tempArrayTwo.sort((a,b) => {
    		// 	return b.likes-a.likes;
    		// });
    		//console.log(this.tempArray);
    		//this._router.navigate(['/']);
    	});
  
  	}
  	getSpecificQuestion(){
  	console.log("may i be getSpecificquestion in day Two?");
  	//console.log("what is id now?",this.passID);
  	let observable = this._httpService.getSpecificquestionInService(this.tempId);
    	observable.subscribe((responseData:any)=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in getSpecificQuestion In day two is : ",responseData);
    		this.whatDay = responseData.day;
    		//console.log("what is tempObj is : ",this.tempObj);
    		//this.tempArray.push(responseData);
    		//console.log(this.tempArray);
    		//this._router.navigate(['/']);
    	});
  }

}
