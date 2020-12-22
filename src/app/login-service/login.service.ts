import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/LoginModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginModel): Observable<{token: string, uid: number}> {
    return this.http.post<{token: string, uid: number}>(environment.baseUrl + environment.login, loginModel);
  }

  logout(): void {
    localStorage.clear();
  }
}
