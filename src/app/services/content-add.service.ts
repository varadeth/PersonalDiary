import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentModel } from '../models/ContentModel';

@Injectable({
  providedIn: 'root'
})
export class ContentAddService {

  constructor(private http: HttpClient) { }

  addContent(content: ContentModel): Observable<any> {
    const url = environment.baseUrl + environment.addpost + '/' + localStorage.getItem('userId');
    const authHeader = 'Bearer ' + localStorage.getItem('token');
    console.log(authHeader);
    console.log(content);
    return this.http.post(url, content);
  }
}
