import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import {LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-navigationlinks',
  templateUrl: './navigationlinks.component.html',
  styleUrls: ['./navigationlinks.component.css']
})
export class NavigationlinksComponent implements OnInit {

  links  = [
    {name: 'SIGNUP',router:'signup'},
    {name: 'LOGIN', router: 'login'}
  ];

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
  }

  buttonPressed(index: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "600px";
    dialogConfig.id = "login-component";

    if(index == 1) {
      alert(index);
      const dialog = this.matDialog.open(LoginComponent,dialogConfig);
    }
    else {

    }
  }
}
