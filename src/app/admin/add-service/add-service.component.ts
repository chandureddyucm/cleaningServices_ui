import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {
  serviceName: string = '';
  description: string = '';
  cost!: number;
  estimatedTime: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  onSubmit() {
    const newService = {
      name: this.serviceName,
      description: this.description,
      cost: this.cost,
      time: this.estimatedTime
    };
    this.authService.addService(newService).subscribe(
      (response) => {
          alert(response.message);
      },
      (error) => {
        console.error('Error adding a service', error);
      }
    );
    this.serviceName = '';
    this.description = '';
    this.cost = 0;
    this.estimatedTime = '';
  }
}
