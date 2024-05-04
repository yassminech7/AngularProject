import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClubComponent } from './components/add-club/add-club.component';
import { EditClubComponent } from './components/edit-club/edit-club.component';
import { ListClubComponent } from './components/list-club/list-club.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetailClubComponent } from './components/detail-club/detail-club.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';
import { DetailEventComponent } from './components/detail-event/detail-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { CommonHeaderComponent } from './components/common-header/common-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClubComponent,
    EditClubComponent,
    ListClubComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    RegisterComponent,
    DetailClubComponent,
    AddEventComponent,
    ListEventComponent,
    DetailEventComponent,
    EditEventComponent,
    AllEventsComponent,
    CommonHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
