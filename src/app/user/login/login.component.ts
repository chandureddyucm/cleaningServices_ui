import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(form: any) {
    if (!form.valid) {
      alert('All fields are required');
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
    };

    this.authService.loginUser(user).subscribe(
      (response) => {
        if (response.message) {
          alert(response.message);
          return;
        }
        this.authService.login("user", response.data[0].uuid);
        this.router.navigate(['/user-home']);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }

  register() {
    this.router.navigate(['/user-register']);
  }

  home(){
    this.router.navigate(['/home']);
  }
}
