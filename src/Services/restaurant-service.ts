import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IRestaurantDetails } from 'src/models/restaurantDetails';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public search = new BehaviorSubject<string>("");
  public price:number= Math.random() * (200) + 100;
  
  private url: string= "https://foodbukka.herokuapp.com/api/v1/restaurant";
  private signUpUrl: string = "https://foodbukka.herokuapp.com/api/v1/auth/register";
  private menuUrl: string = "https://foodbukka.herokuapp.com/api/v1/menu/";

  
  constructor(private http:HttpClient) { }

  getRestaurantDetails(): Observable<any>
  {
    return this.http.get(this.url);
  }

  getMenuDetails(menuId:string): Observable<any>
  {
    return this.http.get(this.menuUrl + "/" + menuId);
  }

  registerUser(data : any): Observable<any>
  {
    return this.http.post(this.signUpUrl, data);
  }
  getPrice() {
    return Math.round(Math.floor(this.price));
  }

}
