import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<SuccessAlertComponent>
             ) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.matDialogRef.close();
  }

}
