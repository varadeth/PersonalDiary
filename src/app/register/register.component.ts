import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SignUpModel } from '../models/SignUpModel';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register-service/register.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { style } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpModel: SignUpModel = {
    name: '',
    contactNo: '',
    email: '',
    username: '',
    password: '',
  };
  errorMessage: string;
  passDisplay = false;
  repassDisplay = false;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>,
              private registerService: RegisterService,
              public matDialog: MatDialog
             ) { }

  ngOnInit() {
    this.errorMessage = null;
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.signUpModel = {
      name: form.value.name,
      contactNo: form.value.contactNo,
      email: form.value.email,
      password: form.value.password,
      username: form.value.username
    };
    this.registerService.registerUser(this.signUpModel).subscribe((responseData) => {
      this.closeModal();
      console.log('Register : ' + responseData);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.width = '350px';
      dialogConfig.panelClass = 'panelClass';
      dialogConfig.id = 'successAlert';
      const dialog = this.matDialog.open(SuccessAlertComponent, dialogConfig);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.errorMessage = error.error.message;
    });
  }

}
