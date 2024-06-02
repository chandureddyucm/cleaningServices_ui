import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/login/login.component';
import { UserRegisterComponent } from './user/register/register.component';
import { StaffLoginComponent } from './staff/login/login.component';
import { StaffRegisterComponent } from './staff/register/register.component';
import { AdminLoginComponent } from './admin/login/login.component';
import { AdminRegisterComponent } from './admin/register/register.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user/home/home.component';
import { StaffHomeComponent } from './staff/home/home.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { AddServiceComponent } from './admin/add-service/add-service.component';
import { ViewServicesComponent } from './admin/view-services/view-services.component';
import { ToggleStaffComponent } from './admin/toggle-staff/toggle-staff.component';
import { ToggleUserComponent } from './admin/toggle-user/toggle-user.component';
import { BookServiceComponent } from './user/book-service/book-service.component';
import { BookedServicesComponent } from './user/booked-services/booked-services.component';
import { CompletedServicesComponent } from './user/completed-services/completed-services.component';
import { CancelledServicesComponent } from './user/cancelled-services/cancelled-services.component';
import { AvailableServicesComponent } from './staff/available-services/available-services.component';
import { AssignedServicesComponent } from './staff/assigned-services/assigned-services.component';
import { StaffCompletedServicesComponent } from './staff/completed-services/completed-services.component';
import { StaffReportComponent } from './admin/staff-report/staff-report.component';
import { UserReportComponent } from './admin/user-report/user-report.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'user-book-service', component: BookServiceComponent },
  { path: 'user-booked-services', component: BookedServicesComponent },
  { path: 'user-completed-services', component: CompletedServicesComponent },
  { path: 'user-cancelled-services', component: CancelledServicesComponent },

  { path: 'staff-login', component: StaffLoginComponent },
  { path: 'staff-register', component: StaffRegisterComponent },
  { path: 'staff-home', component: StaffHomeComponent },
  { path: 'staff-unassigned-services', component: AvailableServicesComponent },
  { path: 'staff-assigned-services', component: AssignedServicesComponent },
  { path: 'staff-completed-services', component: StaffCompletedServicesComponent },

  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'view-services', component: ViewServicesComponent },
  { path: 'toggle-staff', component: ToggleStaffComponent },
  { path: 'toggle-user', component: ToggleUserComponent },
  { path: 'staff-report', component: StaffReportComponent },
  { path: 'user-report', component: UserReportComponent },

  //{ path: 'user/:id', component: UserHomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
