import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../appInterFace/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) { }

  url:any = 'http://localhost:3000/switchMap';

  getSearches(searchTerm:any):Observable<Search>{
    return this.http.get<Search>(this.url+ '?q='+searchTerm);
  }
}
