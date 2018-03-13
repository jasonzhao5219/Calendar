import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-daythree',
  templateUrl: './daythree.component.html',
  styleUrls: ['./daythree.component.css']
})
export class DaythreeComponent implements OnInit {

  constructor(private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

}
