import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/services/restaurant-service';
import { IRestaurantDetails } from '../../models/restaurantDetails';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  public restaurantDetails: IRestaurantDetails[] = [];

  constructor(private service:RestaurantService) { }

  ngOnInit() {
    this.service.getRestaurantDetails()
   .subscribe(data => this.restaurantDetails= data.Result);
  }

}