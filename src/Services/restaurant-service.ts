import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
   
  
  private url: string= "http://localhost:3000/restaurant";
  
  
  constructor(private http:HttpClient) { }

  getRestaurantDetails(): Observable<any>
  {
    return this.http.get(this.url);
  }

  
 

}
