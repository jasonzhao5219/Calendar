import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
constructor(private _httpService: HttpService){}
tempdataTwo = {};
cityid = 1689498;
  ngOnInit(){
      this.getTasksFromService();
    }
  getTasksFromService(){
       let observable = this._httpService.requestDojo(this.cityid);
       observable.subscribe(data => {
         console.log("what is data send back : ", data);
         this.tempdataTwo = data;
       });

}
 }
