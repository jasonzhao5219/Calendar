import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.css']
})
export class MarchComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  	this.getAllDays();
  }
  tempArray = [];
  whatDay = 3;
  tempIdAfter = "";
  whatDayAfter =1;
  note = {passDay:1,passId:""};
  showdayone(){
  	// this._router.navigate(['/dayone',this.tempArray[0][0]._id]);
    this.whatDay = this.tempArray[0][0].day;
    
     //this.getAllDays();
  }
   showdaytwo(){
  	// this._router.navigate(['/dayone',this.tempArray[0][1]._id]);
    this.whatDay = this.tempArray[0][1].day;
  }
  showdaythree(){
  	// this._router.navigate(['/dayone',this.tempArray[0][2]._id]);
    this.whatDay = this.tempArray[0][2].day;
  }
  showdayfour(){
  	// this._router.navigate(['/dayone',this.tempArray[0][3]._id]);
    this.whatDay = this.tempArray[0][3].day;
  }
  showdayfive(){
  	// this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][4].day;
  }
  showdaysix(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][5].day;
  }
  showdayseven(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][6].day;
  }
  showdayeight(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][7].day;
  }
  showdaynine(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][8].day;
  }
  showdayten(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][9].day;
  }
  showdayeleven(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][10].day;
  }
  showdaytwelf(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][11].day;
  }
  showdaythirteen(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][12].day;
  }
  showdayfourteen(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][13].day;
  }
  showdayfifteen(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][14].day;
  }
  showdaysixteen(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][15].day;
  }
  showdayseventeen(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][16].day;
  }
  showdayeightteen(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][17].day;
  }
  showdaynineteen(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][18].day;
  }
  showdaytwenty(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][19].day;
  }
  showdaytwentyone(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][20].day;
  }
  showdaytwentytwo(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][21].day;
  }
  showdaytwentythree(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][22].day;
  }
  showdaytwentyfour(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][23].day;
  }
  showdaytwentyfive(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][24].day;
  }
  showdaytwentysix(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][25].day;
  }
  showdaytwentyseven(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][26].day;
  }
  showdaytwentyeight(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][27].day;
  }
  showdaytwentynine(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][28].day;
  }
  showdaythirty(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][29].day;
  }
  showdaythirtyone(){
    // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
    this.whatDay = this.tempArray[0][30].day;
  }
  

  // getAllDays(){
  // 	console.log("may i be getalldays?");
  // 	let observable = this._httpService.getdayInService();
  //   	observable.subscribe(responseData=>{
  //   		//this.tempAuthors.push(responseData);
  //   		this.tempArray = [];
    		
  //   		console.log("the responsedata in getallDay is : ",responseData);
  //   		this.tempArray.push(responseData);
  //   		console.log(this.tempArray);
  //   		//this._router.navigate(['/']);
  //   	// 	for(var i = 0; i<this.tempArray[0].length;i++){
  //   	// 		var date = new Date(this.tempArray[0][i])
  //   	// }
  //   	});
  // }
   getAllDays(){
    console.log("may i be getalldays in March?");
    let observable = this._httpService.getdayInService();
      observable.subscribe(responseData=>{
        //this.tempAuthors.push(responseData);
        this.tempArray = [];
        
        console.log("the responsedata in getallDay In March is : ",responseData);
        this.tempArray.push(responseData);

        console.log(this.tempArray);
        this.tempIdAfter = this.tempArray[0][this.whatDay-1];
        console.log("In March, tempId is : ",this.tempIdAfter);
        //this._router.navigate(['/']);
      //   for(var i = 0; i<this.tempArray[0].length;i++){
      //     var date = new Date(this.tempArray[0][i])
      // }
      });
  }
}
