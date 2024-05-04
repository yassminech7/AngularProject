import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClubComponent } from './components/add-club/add-club.component';
import { EditClubComponent } from './components/edit-club/edit-club.component';
import { ListClubComponent } from './components/list-club/list-club.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailClubComponent } from './components/detail-club/detail-club.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';
import { DetailEventComponent } from './components/detail-event/detail-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { CommonHeaderComponent } from './components/common-header/common-header.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddClubComponent
  },
  {
    path: 'edit/:id',
    component: EditClubComponent
  },
  {
    path: 'list',
    component: ListClubComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'detail/:id',
    component: DetailClubComponent
  },
  {
    path: 'addevent/:id',
    component: AddEventComponent
  },
  {
    path: 'listevents/:id',
    component: ListEventComponent
  },
  {
    path: 'eventdetails/:id',
    component: DetailEventComponent
  },
  {
    path: 'editevent/:id',
    component: EditEventComponent
  },
  {
    path: 'allevents',
    component: AllEventsComponent
  },
  {
    path: 'header',
    component: CommonHeaderComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
