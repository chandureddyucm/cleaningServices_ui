import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.scss']
})
export class UpdateUserDetailsComponent {
  uuid: string = 'uuid';
  firstName: string = '';
  lastName: string = '';
  mobile: string = '';
  userRole: string = "role";

  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authService.userRole$.subscribe((userRole) => {
      this.userRole = userRole;
    });

    this.authService.loggedUserUUID$.subscribe((loggedUserUUID) => {
      this.uuid = loggedUserUUID;
    });
  }

  onSubmit(form : any) {
    if (!form.valid) {
      alert('All fields are required');
      return;
    }

    const user = {
      uuid: this.uuid,
      first_name: this.firstName,
      last_name: this.lastName,
      mobile: this.mobile,
    };
    if(this.userRole == 'admin'){
      this.authService.updateAdmin(user).subscribe(
        response => {
          alert(response.message)
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
    else if(this.userRole == 'staff'){
      this.authService.updateStaff(user).subscribe(
        response => {
          alert(response.message)
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
    else if(this.userRole == 'user'){
      this.authService.updateUser(user).subscribe(
        response => {
          alert(response.message)
        },
        error => {
          console.error('Update failed', error);
        }
      );
    }

    
  }

}
