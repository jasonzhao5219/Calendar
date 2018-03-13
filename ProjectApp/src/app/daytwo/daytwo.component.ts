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

  	
  }


}
