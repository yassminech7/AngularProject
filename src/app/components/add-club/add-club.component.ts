import { Club } from './../../model/Club';
import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../../services/clubs.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrl: './add-club.component.css'
})
export class AddClubComponent implements OnInit {
  club: Club = new Club();

  constructor(private clubservice: ClubsService) { }
  message  : boolean=false;
  ngOnInit(): void {}

  SaveData() {
    this.clubservice.saveClubData(this.club).subscribe((result) => {
      //console.log(result);
      this.message = true;
      this.club = new Club();
      
    });
  } 
  removeMessage(){
    this.message = false;
  }
}
