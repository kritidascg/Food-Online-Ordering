import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  postLogin(data : any)
  {
    let url= `http://localhost:4200/login`;
    return this.http.post(url, data);
  }
}
