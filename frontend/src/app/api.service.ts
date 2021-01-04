import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl= 'http://localhost:8000/';
  token = 'Token b91223c48731f3c41f8bb2111d64139748bcc2c7';
  httpHearders = new HttpHeaders().set('Content-Type','application/json')
  .set('Authorization',this.token );
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
