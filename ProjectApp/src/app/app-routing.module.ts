import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShoweventComponent } from './showevent/showevent.component';
import { DayoneComponent } from './dayone/dayone.component';
import { MarchComponent } from './march/march.component';
import { ManagementComponent } from './management/management.component';
import { DaytwoComponent } from './daytwo/daytwo.component';
import { DaythreeComponent } from './daythree/daythree.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
const routes: Routes = [
	  { path: '',component: DashboardComponent },
	  { path: 'showevent',component: ShoweventComponent },
	   { path: 'dayone/:id',component: DayoneComponent },
	   { path: 'march',component: MarchComponent },
	    { path: 'management',component: ManagementComponent },
	    { path: 'daytwo',component: DaytwoComponent },
	    { path: 'daythree',component: DaythreeComponent },
	   { path: 'sanjose',component: SanjoseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
