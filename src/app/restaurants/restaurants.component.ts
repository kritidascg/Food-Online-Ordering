import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/services/restaurant-service';
import { IRestaurantDetails } from '../../models/restaurantDetails';

@Component({
  selector: 'app-menu',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantComponent implements OnInit {
 
  public restaurantDetails: IRestaurantDetails[] = [];

  constructor(private service:RestaurantService) { }

  ngOnInit() {
    this.service.getRestaurantDetails()
   .subscribe(data => this.restaurantDetails= data.Result);
  }

  sendRestaurantDetails(restaurantDetails : IRestaurantDetails[])
  {
    this.service.sendRestaurantList(restaurantDetails);
  }
}