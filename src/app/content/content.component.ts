import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentModel } from '../models/ContentModel';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contents: ContentModel[];
  constructor(private router: Router, private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList(1).subscribe((data) => {
      console.log(data[0]);
      this.contents = data;
    });
  }

  onViewContent() {
    this.router.navigate([1], {relativeTo: this.route});
  }
}
