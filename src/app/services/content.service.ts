import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentModel } from '../models/ContentModel';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getContentList(): Observable<ContentModel[]> {
    console.log(environment.baseUrl + environment.content);
    return this.http.get<ContentModel[]>(environment.baseUrl + environment.content);
  }

  getContentById(did: number): Observable<ContentModel> {
    return this.http.get<ContentModel>(environment.baseUrl + environment.contentWithId + '/' + did);
  }
}
