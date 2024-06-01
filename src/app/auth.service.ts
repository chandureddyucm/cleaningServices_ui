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

  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  public userRole$: Observable<string> = this.userRoleSubject.asObservable();

  private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient, private router: Router) { }

  login(role: string): void {
    this.isAuthenticatedSubject.next(true);
    this.userRoleSubject.next(role);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.userRoleSubject.next("role");
    this.router.navigate(['/home']);
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

  addService(service: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/add-service', service);
  }

  getServices(): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/view-services', {});
  }

  toggleServices(uuid: string, is_deleted: boolean): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/toggle-service', {uuid: uuid, is_deleted: is_deleted});
  }

  modifyService(service: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/admin/modify-service', service);
  }
}
