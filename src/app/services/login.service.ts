import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http:HttpClient) { }
  apiUrl="//your api url";
  login(auth:Auth):Observable<Auth>{
    return this.http.post<Auth>(this.apiUrl,auth)
  }
}
