import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-update-user-password',
  templateUrl: './update-user-password.component.html',
  styleUrls: ['./update-user-password.component.scss'],
})
export class UpdateUserPasswordComponent {
  uuid: string = 'uuid';
  password: string = '';
  userRole: string = 'role';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userRole$.subscribe((userRole) => {
      this.userRole = userRole;
    });

    this.authService.loggedUserUUID$.subscribe((loggedUserUUID) => {
      this.uuid = loggedUserUUID;
    });
  }

  onSubmit(form: any) {
    if (!form.valid) {
      alert('All fields are required');
      return;
    }

    const user = {
      uuid: this.uuid,
      password: this.password
    };
    if (this.userRole == 'admin') {
      this.authService.updateAdminPassword(user).subscribe(
        (response) => {
          alert(response.message);
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    } else if (this.userRole == 'staff') {
      this.authService.updateStaffPassword(user).subscribe(
        (response) => {
          alert(response.message);
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    } else if (this.userRole == 'user') {
      this.authService.updateUserPassword(user).subscribe(
        (response) => {
          alert(response.message);
        },
        (error) => {
          console.error('Update failed', error);
        }
      );
    }
  }
}
