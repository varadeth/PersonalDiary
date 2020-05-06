import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { SignUpModel } from '../models/SignUpModel';
import { NgForm } from '@angular/forms';

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
  }

  passDisplay = false;
  repassDisplay = false;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
