import { Component, OnInit, OnChanges } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import {LoginComponent } from '../../login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { LoginService } from 'src/app/login-service/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigationlinks',
  templateUrl: './navigationlinks.component.html',
  styleUrls: ['./navigationlinks.component.css']
})
export class NavigationlinksComponent implements OnInit {

  links;
  isLogin: boolean;
  loggedInSub: Subscription;

  constructor(public matDialog: MatDialog, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.links = [
        {name: 'LOGOUT', router: 3},
        {name: 'ADD', router: 4}
      ];
    } else {
      this.links = [
        {name: 'SIGNUP', router: 2},
        {name: 'LOGIN', router: 1}
      ];
    }
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
      dialog.afterClosed().subscribe(() => {
        if (localStorage.getItem('token') !== null ) {
          this.links = [
            {name: 'LOGOUT', router: 3},
            {name: 'ADD', router: 4}
          ];
        }
      });
    } else if (index === 2) {
      dialogConfig.height = '500px';
      dialogConfig.width = '400px';
      dialogConfig.id = 'register-component';
      const dialog = this.matDialog.open(RegisterComponent, dialogConfig);
    } else if (index === 3) {
      this.loginService.logout();
      this.links = [
        {name: 'SIGNUP', router: 2},
        {name: 'LOGIN', router: 1}
      ];
      this.router.navigate(['/']);
    } else if (index === 4) {
      this.router.navigate(['/add']);
    }
  }
}
