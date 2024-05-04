import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubsService } from '../../services/clubs.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-detail-club',
  templateUrl: './detail-club.component.html',
  styleUrl: './detail-club.component.css'
})
export class DetailClubComponent implements OnInit {
  clubId!: string;
  clubDetails: any;
  events!: any[];


  constructor(private route: ActivatedRoute, private router: Router, private clubService: ClubsService, private eventService: EventsService) { }

  ngOnInit(): void {
    // Récupérer l'ID du club à partir de l'URL
    this.route.params.subscribe(params => {
      this.clubId = params['id'];
      console.log('Club ID:', this.clubId);
      // Appeler le service pour obtenir les détails du club en fonction de l'ID
      this.clubService.getClubDetails(this.clubId).subscribe((details) => {
        console.log('Club Details:', details);
        this.clubDetails = details;
      });
    });
    this.route.params.subscribe(params => {
      this.clubId = params['id'];
      this.loadEvents();
    });
  }

  deleteClub(clubId: any) {
    this.clubService.deleteClub(clubId).subscribe((result) => {
      //console.log(result);
      this.ngOnInit();
      this.router.navigate(['/list']);
    });
  }

  addEvent(id: String) {
    this.router.navigate(['/addevent', id]);
  }
  loadEvents() {
    this.eventService.getEventsByClubId(this.clubId).subscribe(data => {
      this.events = data;
    });
  }
  
  DetailsEvent(id: String){
    this.router.navigate(['/eventdetails', id]);
  }

}
