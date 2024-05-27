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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
