import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss'],
})
export class UserReportComponent {
  users: any[] = [];
  constructor(private authService: AuthService) {
    this.getStats();
  }

  getStats() {
    this.authService.getUserStats().subscribe(
      (response) => {
        if (response.data) {
          this.users = response.data;
        } else alert(response.message);
      },
      (error) => {
        console.error('Error retrieving list of users stats', error);
      }
    );
  }
}
