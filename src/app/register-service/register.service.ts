import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpModel } from '../models/SignUpModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnDestroy{

  constructor(private http: HttpClient) {}

  public ngOnDestroy(): void {

  }

  public registerUser(user: SignUpModel): Observable<any> {
    return this.http.post('http://localhost:8080/register', user);
  }
}
