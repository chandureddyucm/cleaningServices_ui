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
    ToggleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
