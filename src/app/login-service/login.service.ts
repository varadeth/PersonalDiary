import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginModel): Observable<{token: string}> {
    return this.http.post<{token: string}>('http://localhost:8080/authenticate', loginModel);
  }

  logout(): void {
    localStorage.clear();
  }
}
