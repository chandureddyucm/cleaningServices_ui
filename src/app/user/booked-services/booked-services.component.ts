import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-booked-services',
  templateUrl: './booked-services.component.html',
  styleUrls: ['./booked-services.component.scss'],
})
export class BookedServicesComponent {
  user_uuid: string = '';
  services: any[] = [];
  isModalOpen = false;
  feedbackModalOpen = false;
  selectedService: any | null = null;
  feedbackText = '';
  rating = 0;

  stars: number[] = [1, 2, 3, 4, 5];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedUserUUID$.subscribe((loggedUserUUID) => {
      this.user_uuid = loggedUserUUID;
    });
    this.getServices();
  }

  getServices() {
    this.authService.getUserServices(this.user_uuid, [0,1,2,3]).subscribe(
      (response) => {
        if (response.message) alert(response.message);
        else this.services = response.data;
      },
      (error) => {
        console.error('Error fetching services', error);
      }
    );
  }

  cancelService(service: any): void {
    this.authService.cancelService(service.uuid).subscribe(
      (response) => {
        this.getServices();
        alert(response.message);
      },
      (error) => {
        console.error('Error Cancelling a service', error);
      }
    );
  }

  payForService(service: any): void {
    this.authService.payService(service.uuid).subscribe(
      (response) => {
        this.getServices();
        alert(response.message);
      },
      (error) => {
        console.error('Error Paying a service', error);
      }
    );
  } 

  openFeedbackModal(service: any) {
    this.selectedService = service;
    this.feedbackModalOpen = true;
  }

  closeFeedbackModal() {
    this.feedbackModalOpen = false;
  }

  getStarIcon(star:number): string {
    return this.rating >= this.stars.indexOf(star) + 1 ? 'star' : 'star_border';
  }

  setRating(star: number): void {
    this.rating = star;
  }

  submitFeedback() {
    this.authService.feedbackService(this.selectedService.uuid, this.feedbackText, this.rating).subscribe(
      (response) => {
        this.getServices();
        alert(response.message);
      },
      (error) => {
        console.error('Error giving feedback to a service', error);
      }
    );
    this.closeFeedbackModal();
  }
}
