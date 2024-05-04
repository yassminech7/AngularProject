import { Club } from './../../model/Club';
import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../../services/clubs.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrl: './edit-club.component.css'
})
export class EditClubComponent implements OnInit{
  club: any;

  constructor(private clubservice: ClubsService, private router: ActivatedRoute) { }
  message: boolean = false;

  ngOnInit(): void {
    this.clubservice.getClubById(this.router.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);
      this.club = result;
    });
  }

  UpdateData() {
    this.clubservice.updateClubData(this.router.snapshot.params['id'],this.club).subscribe((result) => {
      //console.log(result);
      this.message = true;
      
    });
  } 
  removeMessage(){
    this.message = false;
  }

}
