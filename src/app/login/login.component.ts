import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

import { LoginModel } from '../models/LoginModel';
import { Router } from '@angular/router';
import { LoginService } from '../login-service/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display = false;
  show = false;
  loginModel: LoginModel = {
    username: '',
    password: ''
  };

  @ViewChild('f', {static: true}) loginForm: NgForm;
  constructor(private dialogRef: MatDialogRef<LoginComponent>, private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginModel.username = '';
    this.loginModel.password = '';
    console.log(this.loginForm);
  }

  private closeModal() {
    this.dialogRef.close();
  }

  onLogin(form: NgForm ) {
    this.show = true;
    if (this.validate(form)) {
      this.loginModel = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.loginService.login(this.loginModel).subscribe((responseData) => {
        localStorage.setItem('token', responseData.token);
        this.router.navigate(['/content']);
        this.dialogRef.close();
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
    }
  }

  validate(form: NgForm): boolean {
    return true;
  }
}
