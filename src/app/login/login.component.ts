import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router,private servic:ServiceService) {}

  login(): void {
    // Perform login validation here
    // Example: check if the username and password are valid
    if (this.username === 'admin' && this.password === 'password') {
      // Store the login status in local storage or a service
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to the billing page or dashboard
      this.servic.isaddmin = true;
      this.router.navigate(['product']);
    } else {
      // Handle invalid login credentials
      
      this.router.navigate(['product']);
      //alert('Invalid username or password');
    }
  }

}
