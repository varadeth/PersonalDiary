import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContentModel } from '../models/ContentModel';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contents: ContentModel[];
  contentObs: Observable<ContentModel[]>
  @ViewChild(CdkVirtualScrollViewport, {static: false}) viewPort: CdkVirtualScrollViewport;
  offSet = new BehaviorSubject(null);
  theEnd = false;
  
  constructor(private router: Router, private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList(parseInt(localStorage.getItem('userId'))).subscribe((data) => {
      console.log(data[0]);
      this.contents = data;
    });
  }

  onViewContent(index: number) {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.route,
      state: {
        id: this.contents[index].id,
        did: this.contents[index].did,
        text: this.contents[index].text,
        title: this.contents[index].title,
        date: this.contents[index].date
      }
    };
    this.router.navigate([this.contents[index].did], navigationExtras);
  }

  nextBatch(e, offset) {
    if (this.theEnd) {
      return;
    }
    const end = this.viewPort.getRenderedRange().end;
    const total = this.viewPort.getDataLength();
    if(end === total) {
      this.offSet.next(this.offSet);
    }
  }

  trackByIdx(i) {
    return i;
  }

  getBatch(lastSeen: String) {

  }

}
