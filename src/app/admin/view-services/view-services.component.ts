import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

interface Service {
  uuid: string;
  name: string;
  description: string;
  cost: number;
  time: string;
  is_deleted: boolean;
}

@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.scss'],
})
export class ViewServicesComponent implements OnInit {
  services: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.authService.getServices().subscribe(
      (response) => {
        if (response.data) {
          this.services = response.data;
        } else alert(response.message);
      },
      (error) => {
        console.error('Error retrieving list of services', error);
      }
    );
  }

  toggleServiceStatus(uuid: string, status: boolean) {
    this.authService.toggleServices(uuid, status).subscribe(
      (response) => {
        this.getServices();
        alert(response.message);
      },
      (error) => {
        console.error('Error toggling a service', error);
      }
    );
  }

  isModalOpen = false;
  selectedService: any = {};

  openModal(service: any) {
    this.selectedService = { ...service };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    const service = {
      uuid: this.selectedService.uuid,
      name: this.selectedService.name,
      description: this.selectedService.description,
      cost: this.selectedService.cost,
      time: this.selectedService.time,
    };
    this.authService.modifyService(service).subscribe(
      (response) => {
        this.getServices();
        alert(response.message);
      },
      (error) => {
        console.error('Error modifying a service', error);
      }
    );
    this.closeModal();
  }
}
