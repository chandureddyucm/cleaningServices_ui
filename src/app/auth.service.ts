import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

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
}
