import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ContentModel } from '../models/ContentModel';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  content: ContentModel;
  contentObs: Observable<ContentModel>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contentService: ContentService) {
    this.content = this.router.getCurrentNavigation().extras.state as ContentModel;
    if (this.content === undefined) {
      this.loadContent();
    }
  }

  ngOnInit() {
  }

  loadContent() {
    this.contentObs = this.activatedRoute.params.pipe(
      switchMap(params => this.getContentById(params.id))
    );
    this.contentObs.subscribe(content => {
      this.content = content;
    })
  }

  getContentById(did: number): Observable<ContentModel> {
    return this.contentService.getContentById(parseInt(localStorage.getItem('userId')), did);
  }
}
