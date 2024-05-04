import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';
import { CommonHeaderComponent } from '../common-header/common-header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  user: User = new User();
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.getUsers().subscribe(
      (users) => {
        const foundUser = users.find(user => user.username === this.credentials.username && user.password === this.credentials.password);
        if (foundUser) {
          alert('Connexion Successful');
          this.router.navigate(['/list']);
        } else {
          alert('Username or password incorrect');
          this.router.navigate(['/']);
        }
      },
      (error) => {
        alert('Connexion error');
        console.error(error);
        this.router.navigate(['/']);
      }
    );
  }
}
