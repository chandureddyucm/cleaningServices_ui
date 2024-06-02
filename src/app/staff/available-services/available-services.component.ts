import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.scss'],
})
export class AvailableServicesComponent {
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
    this.authService.getAvailableServices().subscribe(
      (response) => {
        if (response.message) alert(response.message);
        else this.services = response.data;
      },
      (error) => {
        console.error('Error fetching services', error);
      }
    );
  }

  assignService(service: any) {
    this.authService.assignService(service.uuid, this.staff_uuid).subscribe(
      (response) => {
        this.getServices();
        if (response.message) alert(response.message);
        else this.services = response.data;
      },
      (error) => {
        console.error('Error assigning a service', error);
      }
    );
  }
}
