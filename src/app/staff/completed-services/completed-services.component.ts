import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-completed-services',
  templateUrl: './completed-services.component.html',
  styleUrls: ['./completed-services.component.scss']
})
export class StaffCompletedServicesComponent {
  staff_uuid: string = '';
  services: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedUserUUID$.subscribe((loggedUserUUID) => {
      this.staff_uuid = loggedUserUUID;
    });
    this.getServices();
  }

  getServices() {
    this.authService.getStaffServices(this.staff_uuid, [2,3,5]).subscribe(
      (response) => {
        if (response.message) alert(response.message);
        else this.services = response.data;
      },
      (error) => {
        console.error('Error fetching services', error);
      }
    );
  }
}
