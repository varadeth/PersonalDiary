import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from '../DateFormatPipe/date-format.pipe';
import { NgForm } from '@angular/forms';
import { ContentModel } from '../models/ContentModel';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.css']
})
export class ContentAddComponent implements OnInit {
  date: string;
  contentModel: ContentModel;
  constructor(private datePipe: DateFormatPipe) { }

  ngOnInit() {
    // console.log(new Date());
    this.date = this.datePipe.transform(new Date());
    console.log(this.date);
    this.contentModel = {
      content: '',
      date: ''
    }
  }

  addContent(form: NgForm) {
    this.contentModel = {
      content: form.value.content,
      date: this.date,
    }
  }

}
