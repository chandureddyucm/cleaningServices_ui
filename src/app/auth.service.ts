import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userRoleSubject: BehaviorSubject<string> = new BehaviorSubject<string>("role");
  private loggedUserUUIDSubject: BehaviorSubject<string> = new BehaviorSubject<string>("loggedUserUUID");

  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  public userRole$: Observable<string> = this.userRoleSubject.asObservable();
  public loggedUserUUID$: Observable<string> = this.loggedUserUUIDSubject.asObservable();

  private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient, private router: Router) { }

  login(role: string, uuid?:string): void {
    this.isAuthenticatedSubject.next(true);
    this.userRoleSubject.next(role);
    this.loggedUserUUIDSubject.next(uuid||'uuid');
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.userRoleSubject.next("role");
    this.router.navigate(['/home']);
  }

  getStaffs(): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/get-staffs', {});
  }

  getUsers(): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/get-users', {});
  }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/register-user', user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/get-user', user);
  }

  registerStaff(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/register-staff', user);
  }

  loginStaff(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/get-staff', user);
  }

  registerAdmin(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/register-admin', user);
  }

  loginAdmin(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/get-admin', user);
  }

  //Admin
  addService(service: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/add-service', service);
  }

  getServices(): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/view-services', {});
  }

  toggleServices(uuid: string, is_deleted: boolean): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/toggle-service', {uuid: uuid, is_deleted: is_deleted});
  }

  toggleStaff(uuid: string, is_deleted: boolean): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/toggle-staff', {uuid: uuid, is_deleted: is_deleted});
  }

  toggleUser(uuid: string, is_deleted: boolean): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/toggle-user', {uuid: uuid, is_deleted: is_deleted});
  }

  modifyService(service: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/modify-service', service);
  }

  getStaffStats(): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/get-staff-report', {});
  }

  getUserStats(): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/get-user-report', {});
  }


  //User
  getUserServices(user_uuid: string, status: number[]): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/get-services', {user_uuid: user_uuid, status: status});
  }

  bookService(service: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/book-service', service);
  }

  payService(uuid: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/pay-service', {uuid: uuid});
  }

  cancelService(uuid: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/cancel-service', {uuid: uuid});
  }

  feedbackService(uuid: string, feedback: string, rating:number): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/feedback-service', {uuid:uuid, feedback:feedback, rating:rating});
  }

  //Staff
  getAvailableServices(): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/get-services', {});
  }

  getStaffServices(staff_uuid: string, status: number[]): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/get-assigned-services', {staff_uuid: staff_uuid, status: status});
  }

  assignService(uuid: string, staff_uuid: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/assign-service', {uuid: uuid, staff_uuid:staff_uuid});
  }

  completeService(uuid: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/complete-service', {uuid: uuid});
  }

  //update
  updateUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/update-user', user);
  }

  updateUserPassword(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/user/update-user-password', user);
  }

  updateStaff(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/update-staff', user);
  }

  updateStaffPassword(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/staff/update-staff-password', user);
  }

  updateAdmin(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/update-admin', user);
  }

  updateAdminPassword(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/update-admin-password', user);
  }
}