import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/login/login.component';
import { AdminRegisterComponent } from './admin/register/register.component';
import { StaffLoginComponent } from './staff/login/login.component';
import { StaffRegisterComponent } from './staff/register/register.component';
import { UserLoginComponent } from './user/login/login.component';
import { UserRegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { StaffHomeComponent } from './staff/home/home.component';
import { UserHomeComponent } from './user/home/home.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { AddServiceComponent } from './admin/add-service/add-service.component';
import { ViewServicesComponent } from './admin/view-services/view-services.component';
import { ToggleStaffComponent } from './admin/toggle-staff/toggle-staff.component';
import { ToggleUserComponent } from './admin/toggle-user/toggle-user.component';
import { BookServiceComponent } from './user/book-service/book-service.component';
import { BookedServicesComponent } from './user/booked-services/booked-services.component';
import { CompletedServicesComponent } from './user/completed-services/completed-services.component';
import { CancelledServicesComponent } from './user/cancelled-services/cancelled-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatIconModule } from '@angular/material/icon';
import { AvailableServicesComponent } from './staff/available-services/available-services.component';
import { AssignedServicesComponent } from './staff/assigned-services/assigned-services.component';
import { StaffCompletedServicesComponent } from './staff/completed-services/completed-services.component';
import { UserReportComponent } from './admin/user-report/user-report.component';
import { StaffReportComponent } from './admin/staff-report/staff-report.component';
import { UpdateUserDetailsComponent } from './common/update-user-details/update-user-details.component';
import { UpdateUserPasswordComponent } from './common/update-user-password/update-user-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminHomeComponent,
    StaffLoginComponent,
    StaffRegisterComponent,
    StaffHomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserHomeComponent,
    HomeComponent,
    NavigationComponent,
    AddServiceComponent,
    ViewServicesComponent,
    ToggleStaffComponent,
    ToggleUserComponent,
    BookServiceComponent,
    BookedServicesComponent,
    CompletedServicesComponent,
    CancelledServicesComponent,
    AvailableServicesComponent,
    AssignedServicesComponent,
    StaffCompletedServicesComponent,
    UserReportComponent,
    StaffReportComponent,
    UpdateUserDetailsComponent,
    UpdateUserPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
