import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url: string= "https://foodbukka.herokuapp.com/api/v1/restaurant";
  private signUpUrl: string = "https://foodbukka.herokuapp.com/api/v1/auth/register";
  constructor(private http:HttpClient) { }

  getRestaurantDetails(): Observable<any>
  {
    return this.http.get(this.url);
  }

  registerUser(data : any): Observable<any>
  {
    return this.http.post(this.signUpUrl, data);
  }
 
  



}
