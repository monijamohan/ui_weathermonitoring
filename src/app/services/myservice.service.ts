import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
   newHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
})
  apiUrl = 'http://localhost:8000';
  name: string = '';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/default_map`);
  }

  getlocation(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/location_search/`,{params: {'name':name}});
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/forcast_temperature`, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
}
