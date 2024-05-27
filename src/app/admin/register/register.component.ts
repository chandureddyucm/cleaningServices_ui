import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class AdminRegisterComponent {
  firstName: string = '';
  lastName: string = '';
  mobile: string = '';
  email: string = '';
  username: string = '';
  gender: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form : any) {
    if (!form.valid) {
      alert('All fields are required');
      return;
    }

    const user = {
      first_name: this.firstName,
      last_name: this.lastName,
      mobile: this.mobile,
      email: this.email,
      user_name: this.username,
      gender: this.gender,
      password: this.password
    };

    this.authService.registerAdmin(user).subscribe(
      response => {
        alert(response.message)
        this.router.navigate(['/admin-login']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }

  login() {
    this.router.navigate(['/admin-login']);
  }

  home(){
    this.router.navigate(['/home']);
  }
}
