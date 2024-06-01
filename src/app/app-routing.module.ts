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

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'user-home', component: UserHomeComponent },

  { path: 'staff-login', component: StaffLoginComponent },
  { path: 'staff-register', component: StaffRegisterComponent },
  { path: 'staff-home', component: StaffHomeComponent },

  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'view-services', component: ViewServicesComponent },
  { path: 'toggle-staff', component: ToggleStaffComponent },
  { path: 'toggle-user', component: ToggleUserComponent },


  //{ path: 'user/:id', component: UserHomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
