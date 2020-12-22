import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from '../DateFormatPipe/date-format.pipe';
import { NgForm } from '@angular/forms';
import { ContentModel } from '../models/ContentModel';
import { ContentAddService } from '../services/content-add.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.css']
})
export class ContentAddComponent implements OnInit {
  date: string;
  contentModel: ContentModel;
  constructor(private datePipe: DateFormatPipe, private contentAddService: ContentAddService, private router: Router) { }

  ngOnInit() {
    // console.log(new Date());
    this.date = this.datePipe.transform(new Date());
    console.log(this.date);
    this.contentModel = {
      title: '',
      text: '',
      date: ''
    };
  }

  addContent(form: NgForm) {
    this.contentModel = this.createModel(form);
    if (this.isValid(this.contentModel)) {
      this.contentAddService.addContent(this.contentModel)
        .subscribe((responseData) => {
          console.log(responseData);
          this.router.navigate(['/content']);
        }, (error: HttpErrorResponse) => {
          console.log(error);
        });
    }
  }

  createModel(form: NgForm) {
    console.log(form);
    return {
      title: form.value.title,  
      text: form.value.diaryContent,
      date: this.date,
    };
  }

  isValid(contentModel: ContentModel) {
    return true;
  }

}
