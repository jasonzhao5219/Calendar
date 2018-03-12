import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  	this.getAllDays();
  }
  tempArray = [];
  tempQuestion = {day:1};
  //add Day in management page
  addDaysubmit(){
  	console.log("may i be addDaysubmit?");
  	let observable = this._httpService.addQuestion(this.tempQuestion);
    	observable.subscribe(responseData=>{
    	
    		console.log("the responsedata in questionsubmit is : ",responseData);
    		
    	});
  }

  getAllDays(){
  	console.log("may i be getalldays?");
  	let observable = this._httpService.getdayInService();
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		this.tempArray = [];
    		
    		console.log("the responsedata in getallDay is : ",responseData);
    		this.tempArray.push(responseData);
    		console.log(this.tempArray);
    		//this._router.navigate(['/']);
    	// 	for(var i = 0; i<this.tempArray[0].length;i++){
    	// 		var date = new Date(this.tempArray[0][i])
    	// }
    	});
  }
  questiondelete(id){
  	let observable = this._httpService.DeleteInService(id);
    	observable.subscribe(responseData=>{
    		//this.tempAuthors.push(responseData);
    		
    		
    		console.log("the responsedata in questiondelete is : ",responseData);
    		this.getAllDays();

    	});
  }
}
