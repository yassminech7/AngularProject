import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../model/Event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent implements OnInit {
  event: Event = new Event();
  clubId!: string;


  constructor(private route: ActivatedRoute, private eventservice: EventsService) { }
  message: boolean = false;
  ngOnInit(): void {
    // Récupérer l'identifiant du club à partir de l'URL
    this.route.params.subscribe(params => {
      this.clubId = params['id'];
      console.log("hiii", typeof params['id'])
    });
  }

  SaveData() {
    this.eventservice.addEvent(this.clubId, this.event).subscribe((result) => {
      this.message = true;
      this.event = new Event();

    });
  }
  removeMessage() {
    this.message = false;
  }


}
