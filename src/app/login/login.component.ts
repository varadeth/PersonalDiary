import { Component, OnInit, ElementRef } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

import { LoginModel } from '../models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display = false;
  loginModel: LoginModel = {
    username: '',
    password: ''
  };
  constructor(private dialogRef: MatDialogRef<LoginComponent>) {
  
  }

  ngOnInit() {
    this.loginModel.username = '';
    this.loginModel.password = '';
  }

  private closeModal() {
    this.dialogRef.close();
  }

  onLogin(form: NgForm ) {
    console.log(form);
  }

}
