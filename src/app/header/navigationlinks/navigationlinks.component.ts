import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import {LoginComponent } from '../../login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';

@Component({
  selector: 'app-navigationlinks',
  templateUrl: './navigationlinks.component.html',
  styleUrls: ['./navigationlinks.component.css']
})
export class NavigationlinksComponent implements OnInit {

  links  = [
    {name: 'SIGNUP', router: 'signup'},
    {name: 'LOGIN', router: 'login'}
  ];

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
  }

  buttonPressed(index: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    if (index === 1) {
      dialogConfig.height = '270px';
      dialogConfig.width = '350px';
      dialogConfig.panelClass = 'panelClass';
      dialogConfig.id = 'login-component';
      const dialog = this.matDialog.open(LoginComponent, dialogConfig);
    } else {
      dialogConfig.height = '500px';
      dialogConfig.width = '400px';
      dialogConfig.id = 'register-component';
      const dialog = this.matDialog.open(RegisterComponent, dialogConfig);
    }
  }
}
