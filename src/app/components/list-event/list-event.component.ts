import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  constructor(private eventService: EventsService, private route: ActivatedRoute) { }
  events: any[] = [];
  clubId!: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clubId = params['id'];
      this.getEventsByClubId(this.clubId);
    });
  }

  getEventsByClubId(clubId: string): void {
    this.eventService.getEventsByClubId(clubId).subscribe(events => {
      this.events = events;
    });
  }
}
