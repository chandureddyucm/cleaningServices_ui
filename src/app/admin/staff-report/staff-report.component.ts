import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-staff-report',
  templateUrl: './staff-report.component.html',
  styleUrls: ['./staff-report.component.scss'],
})
export class StaffReportComponent {
  staffs: any[] = [];
  constructor(private authService: AuthService) {
    this.getStats();
  }

  getStats() {
    this.authService.getStaffStats().subscribe(
      (response) => {
        if (response.data) {
          this.staffs = response.data;
        } else alert(response.message);
      },
      (error) => {
        console.error('Error retrieving list of staffs stats', error);
      }
    );
  }
}
