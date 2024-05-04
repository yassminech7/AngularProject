import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrl: './all-events.component.css'
})
export class AllEventsComponent implements OnInit {

  constructor(private event: EventsService, private router: Router) { }
  eventData: any;
  ngOnInit(): void {
    this.event.getAllEvents().subscribe((allData) => {
      console.log(allData);
      this.eventData = allData;
    })

  }
  onEditClub(id:string){
    this.router.navigate(['/editevent', id]);
  }

  onViewClub(id:string){
    this.router.navigate(['/eventdetails', id]);
  }

}
