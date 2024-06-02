import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
interface Service {
  uuid: string;
  name: string;
  description: string;
  cost: number; // If the cost should be a number, change this to `number`.
  time: string;
}

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.scss'],
})
export class BookServiceComponent {
  isModalOpen = false;
  selectedService: any = {};
  address: string = '';
  notes: string = '';
  services: Service[] = [];
  bookingForOther: boolean = false;

  user_uuid: string = 'uuid';

  today = new Date();

  year = this.today.getFullYear();
  month = String(this.today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  day = String(this.today.getDate()).padStart(2, '0');

  formattedDate = `${this.year}-${this.month}-${this.day}`;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedUserUUID$.subscribe((loggedUserUUID) => {
      this.user_uuid = loggedUserUUID;
    });
    this.getServices();
  }

  getServices() {
    this.authService.getServices().subscribe(
      (response) => {
        if (response.message) alert(response.message);
        else this.services = response.data;
      },
      (error) => {
        console.error('Error toggling a service', error);
      }
    );
  }

  bookForSelf(service: any) {
    this.bookingForOther = false;
    this.selectedService = service;
    this.address = '';
    this.notes = '';
    this.isModalOpen = true;
  }

  bookForOthers(service: any) {
    this.bookingForOther = true;
    this.selectedService = service;
    this.address = '';
    this.notes = '';
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onBook() {
    const serviceBooked = {
      user_uuid: this.user_uuid,
      service_uuid: this.selectedService.uuid,
      service_name: this.selectedService.name,
      service_cost: this.selectedService.cost,
      service_description: this.selectedService.description,
      service_date: this.formattedDate,

      service_address: this.address || 'Self',
      service_for_other: this.bookingForOther,
      notes: this.notes,
    };

    this.authService.bookService(serviceBooked).subscribe(
      (response) => {
        alert(response.message);
      },
      (error) => {
        console.error('Error toggling a service', error);
      }
    );

    this.closeModal();
  }
}
