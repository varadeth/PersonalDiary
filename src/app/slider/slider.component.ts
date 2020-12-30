import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['/content'])
    }
  }

}
