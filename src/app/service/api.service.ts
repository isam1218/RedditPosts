import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = 'http://www.reddit.com/r/lakers/new.json';
  

  constructor(private http: HttpClient) {

    
   }

   getPosts() {
    return this.http.get(this.configUrl);
   }

   getComments(data) {
     return this.http.get(data);
   }
}
