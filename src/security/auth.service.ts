import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl='https://foodbukka.herokuapp.com/api/v1/auth/login';
  constructor(private http:HttpClient) {

   }
   onLogin(userCred:any){
     return this.http.post(this.loginUrl,userCred);
   }
   IsLoggedIn(){
     return localStorage.getItem('loginForm')!==null;
   }
 

}
