import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {LoginComponent } from '../../login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { LoginService } from 'src/app/login-service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationlinks',
  templateUrl: './navigationlinks.component.html',
  styleUrls: ['./navigationlinks.component.css']
})
export class NavigationlinksComponent implements OnInit {

  loggedIn: boolean;

  constructor(public matDialog: MatDialog, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
  }

  createDialog(height: string, width: string, panelClass: string, id: string, disableClose: boolean): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = height;
    dialogConfig.width = width;
    dialogConfig.panelClass = panelClass;
    dialogConfig.id = panelClass;
    dialogConfig.disableClose = disableClose;
    return dialogConfig;
  }

  onLoginPressed(): void {
    const dialogConfig = this.createDialog('270px', '350px', 'panelClass', 'login-component', false);
    const dialog = this.matDialog.open(LoginComponent, dialogConfig);
    dialog.afterClosed().subscribe( () => {
      if (localStorage.getItem('token') !== null) {
        this.loggedIn = true;
      }
    });
  }

  onLogoutPressed(): void {
    this.loginService.logout();
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

  onAddContent(): void {
    this.router.navigate(['/add']);
  }

  onRegister(): void {
    const dialogConfig = this.createDialog('500px', '400px', '', 'register-component', false);
    const dialog = this.matDialog.open(RegisterComponent, dialogConfig);
  }
}
