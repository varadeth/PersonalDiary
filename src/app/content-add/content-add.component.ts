import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from '../DateFormatPipe/date-format.pipe';
import { NgForm } from '@angular/forms';
import { ContentModel } from '../models/ContentModel';
import { ContentAddService } from '../services/content-add.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.css']
})
export class ContentAddComponent implements OnInit {
  date: string;
  contentModel: ContentModel;
  isEditMode: boolean;
  constructor(
    private datePipe: DateFormatPipe,
    private contentAddService: ContentAddService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService
  ) {
    this.contentModel = this.router.getCurrentNavigation().extras.state as ContentModel;
    this.isEditMode = false;
    if(this.contentModel !== undefined) {
      this.isEditMode = true;
      this.date = this.contentModel.date
    }
    else {
      this.activatedRoute.url.pipe(
        switchMap(segment => this.getContent(segment))
      ).subscribe(content => {
        if(!(content === null || content === undefined)) {
          this.isEditMode = true;
          this.contentModel = content;
        }
      })
    }
  }

  ngOnInit() {
    if(!this.isEditMode) {
      this.date = this.datePipe.transform(new Date());
      console.log(this.date);
      this.contentModel = {
        title: '',
        text: '',
        date: ''
      };
    }
    console.log(this.contentModel);
  }

  addContent(form: NgForm) {
    if(!this.isEditMode) {
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
    else {
      this.updateContent();
    }
  }

  createModel(form: NgForm) {
    console.log(this.contentModel);
    return {
      title: form.value.title,  
      text: form.value.diaryContent,
      date: this.date,
    };
  }

  isValid(contentModel: ContentModel) {
    return true;
  }

  updateContent() {
    if (this.isValid(this.contentModel)) {
      this.contentAddService.updateContent(this.contentModel).subscribe((response) => {
        this.router.navigate(['/content']);
      }, error => {
        console.log(error);
      })
    }
  }

  getContent(segment: UrlSegment[]): Observable<ContentModel> {
    
    if(segment[1] !== undefined && segment[1].path === 'edit') {
      return this.contentService.getContentById(parseInt(segment[2].path));
    }
    return of(null);
  }
}
