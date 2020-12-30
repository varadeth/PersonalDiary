import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignUpModel } from '../../models/SignUpModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnDestroy{

  constructor(private http: HttpClient) {}

  public ngOnDestroy(): void {

  }

  public registerUser(user: SignUpModel): Observable<any> {
    return this.http.post(environment.baseUrl + environment.signup, user);
  }
}
