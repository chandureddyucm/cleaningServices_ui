import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-toggle-user',
  templateUrl: './toggle-user.component.html',
  styleUrls: ['./toggle-user.component.scss']
})
export class ToggleUserComponent {
  users: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.authService.getUsers().subscribe(
      (response) => {
        if (response.data) {
          this.users = response.data;
          console.log(this.users)
        } else alert(response.message);
      },
      (error) => {
        console.error('Error retrieving list of users', error);
      }
    );
  }

  toggleUserStatus(uuid: string, status: boolean) {
    this.authService.toggleUser(uuid, status).subscribe(
      (response) => {
        this.getUsers();
        alert(response.message);
      },
      (error) => {
        console.error('Error toggling a user', error);
      }
    );
  }
}
