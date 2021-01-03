import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl= 'http://localhost:8000/';
  httpHearders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<any>{
    return this.http.get(this.baseUrl + 'members/',
    {headers:this.httpHearders});
  };

  getMember(id): Observable<any>{
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers:this.httpHearders});
  };
}