import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-assigned-services',
  templateUrl: './assigned-services.component.html',
  styleUrls: ['./assigned-services.component.scss'],
})
export class AssignedServicesComponent {
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
    this.authService.getStaffServices(this.staff_uuid, [1]).subscribe(
      (response) => {
        if (response.message) alert(response.message);
        else this.services = response.data;
      },
      (error) => {
        console.error('Error fetching services', error);
      }
    );
  }

  completeService(service: any) {
    this.authService.completeService(service.uuid).subscribe(
      (response) => {
        this.getServices();
        if (response.message) alert(response.message);
        else this.services = response.data;
      },
      (error) => {
        console.error('Error completing a service', error);
      }
    );
  }
}
