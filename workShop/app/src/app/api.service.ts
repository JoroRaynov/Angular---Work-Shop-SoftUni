import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'

const apiURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get(apiURL + '/themes');
  }
  // /posts?limit=5
  loadPosts(limit?: number) {
    return this.http.get(apiURL + `/posts?${limit ? `limit=${limit}` : ''}`);
  }
}
