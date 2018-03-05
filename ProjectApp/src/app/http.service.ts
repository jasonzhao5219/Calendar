import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  addEvent(eventObj){
  	console.log("may i be addEvent in service?");
  	return this._http.post('/api/addEvent/',eventObj);
  }
  getdayInService(){
  	return this._http.get('/api/getDays/');
  }
  getAlleventsInService(id){
  	console.log("may i be getallEvent in service?",id);
  	
  	return this._http.get('/api/getallEvent/'+id);
  }
  // getAlleventsInServiceTwo(id){
  // 	console.log("may i be getallEvent in service of DayTwo?");
  // 	console.log("what the id in service of day Two? ",id);
  	
  // 	return this._http.get('/api/getallEventTwo/'+id);
  // }
  getSpecificquestionInService(id){
  	console.log("may i be get specific ques in service?",id);
  	return this._http.get('/api/ShowSpecificQues/'+id);
  }
  //temporary need
  addQuestion(quesObj){
  	console.log("may i be addQuestion in service?");
  	return this._http.post('/api/addQues/',quesObj);
  }
  DeleteInService(id){
  	console.log("may i be events delete in service?");
  	return this._http.delete('api/delete/'+id);
  }
  requestDojo(cityid){
  		return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id='+cityid+'&APPID=af955f0fd20fdc9d305f96aea6720f93');
  	}
  //  DeleteEventsInService(id){
  // 	console.log("may i be events delete in service?");
  // 	return this._http.post('api/eventsdelete/',id);
  // }
}
