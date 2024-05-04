import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupUrl = 'http://localhost:3000/signup';
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  signup(userData: any): Observable<any> {
    return this.http.post<any>(`${this.signupUrl}`, userData);
  }

  login(loginData: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, loginData).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.signupUrl).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

}
