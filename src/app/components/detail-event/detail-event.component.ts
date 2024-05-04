import { EventsService } from '../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.css'
})
export class DetailEventComponent implements OnInit {
  eventId!: string;
  eventDetails: any;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      this.getEventDetails();
    });
  }

  getEventDetails() {
    this.eventService.getEventDetails(this.eventId).subscribe((data) => {
      this.eventDetails = data;
    });
  }

  deleteClub(eventId: any) {
    this.eventService.deleteEvent(eventId).subscribe((result) => {
      //console.log(result);
      this.ngOnInit();
      this.router.navigate(['/listevents', eventId]);
    });

  }
  editClub(id:string){
    this.router.navigate(['/editevent', id]);
  }
}
