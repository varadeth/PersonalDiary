import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentModel } from '../models/ContentModel';

@Injectable({
  providedIn: 'root'
})
export class ContentAddService {

  constructor(private http: HttpClient) { }

  addContent(content: ContentModel): Observable<any> {
    const url = environment.baseUrl + environment.addpost;
    return this.http.post(url, content);
  }

  updateContent(content: ContentModel) {
    const url = environment.baseUrl + environment.updatepost + '/' + content.did; 
    console.log(url);
    console.log(content);
    return this.http.put(url, content);
  }
}
