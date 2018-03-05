import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShoweventComponent } from './showevent/showevent.component';
import { DayoneComponent } from './dayone/dayone.component';
import { MarchComponent } from './march/march.component';
import { ManagementComponent } from './management/management.component';
import { DaytwoComponent } from './daytwo/daytwo.component';
import { DaythreeComponent } from './daythree/daythree.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShoweventComponent,
    DayoneComponent,
    MarchComponent,
    ManagementComponent,
    DaytwoComponent,
    DaythreeComponent,
    SanjoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


