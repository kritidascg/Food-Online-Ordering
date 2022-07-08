import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IRestaurantDetails } from 'src/models/restaurantDetails';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url: string= "https://foodbukka.herokuapp.com/api/v1/restaurant";
  private signUpUrl: string = "https://foodbukka.herokuapp.com/api/v1/auth/register";
  private menuUrl: string = "https://foodbukka.herokuapp.com/api/v1/menu/5f5eccf4e923d0aca3e7d449";

  private Subject= new BehaviorSubject<any>("restaurantList.value");

  constructor(private http:HttpClient) { }

  getRestaurantDetails(): Observable<any>
  {
    return this.http.get(this.url);
  }

  getMenuDetails(): Observable<any>
  {
    return this.http.get(this.menuUrl);
  }

  registerUser(data : any): Observable<any>
  {
    return this.http.post(this.signUpUrl, data);
  }
 
  sendRestaurantList(restaurantDetails : IRestaurantDetails[])
  {
    this.Subject.next(restaurantDetails);
  }

  receiveRestaurantList(): Observable<any>
  {
    return this.Subject.asObservable();
  }
  



}
