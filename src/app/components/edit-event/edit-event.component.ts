import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent implements OnInit{
  event:any

  constructor(private eventservice: EventsService, private router: ActivatedRoute) { }
  message: boolean = false;

  ngOnInit(): void {
    this.eventservice.getEventById(this.router.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);
      this.event = result;
    });
  }

  UpdateData() {
    this.eventservice.updateClubData(this.router.snapshot.params['id'],this.event).subscribe((result) => {
      //console.log(result);
      this.message = true;
      
    });
  } 
  removeMessage(){
    this.message = false;
  }

}
