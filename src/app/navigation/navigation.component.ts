import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isAuthenticated: boolean = false;
  userRole: string = "role";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
    this.authService.userRole$.subscribe((userRole) => {
      this.userRole = userRole;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
