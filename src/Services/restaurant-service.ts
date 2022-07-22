import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IRestaurantDetails } from 'src/models/restaurantDetails';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public search = new BehaviorSubject<string>("");
  
  
  private url: string= "http://localhost:3000/restaurant";
  
  
  constructor(private http:HttpClient) { }

  getRestaurantDetails(): Observable<any>
  {
    return this.http.get(this.url);
  }

  
 

}
