import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubsService } from '../../services/clubs.service';
@Component({
  selector: 'app-list-club',
  templateUrl: './list-club.component.html',
  styleUrl: './list-club.component.css'
})
export class ListClubComponent implements OnInit {

  constructor(private club: ClubsService, private router: Router) { }
  clubData: any;
  ngOnInit(): void {
    this.club.getAllClubs().subscribe((allData) => {
      console.log(allData);
      this.clubData = allData;
    })

  }
  onViewClub(id: string) {
    this.router.navigate(['/detail', id]);
  }

  onEditClub(id: string) {
    this.router.navigate(['/edit', id]);
  }

}
