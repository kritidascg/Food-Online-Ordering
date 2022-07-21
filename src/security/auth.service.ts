import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) {

   }
   onLogin(userCred:any){
    const {username,password}= userCred;
     return this.http.post('http://localhost:3000/login',{username,password});
   }
   IsLoggedIn(){
     return localStorage.getItem('loginForm')!==null;
   }
 
   
}
