import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private clubservice: AuthService) { }
  message  : boolean=false;
  ngOnInit(): void {}

  SaveData() {
    this.clubservice.signup(this.user).subscribe((result) => {
      //console.log(result);
      this.message = true;
      this.user = new User();
      
    });
  } 
  removeMessage(){
    this.message = false;
  }
}


