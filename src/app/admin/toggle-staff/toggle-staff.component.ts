import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-toggle-staff',
  templateUrl: './toggle-staff.component.html',
  styleUrls: ['./toggle-staff.component.scss']
})
export class ToggleStaffComponent {
  staffs: any[] = [];
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getStaffs();
  }

  getStaffs() {
    this.authService.getStaffs().subscribe(
      (response) => {
        if (response.data) {
          this.staffs = response.data;
          console.log(this.staffs)
        } else alert(response.message);
      },
      (error) => {
        console.error('Error retrieving list of staffs', error);
      }
    );
  }

  toggleStaffStatus(uuid: string, status: boolean) {
    this.authService.toggleStaff(uuid, status).subscribe(
      (response) => {
        this.getStaffs();
        alert(response.message);
      },
      (error) => {
        console.error('Error toggling a staff', error);
      }
    );
  }
}
