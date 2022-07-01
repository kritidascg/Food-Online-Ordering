import { Component, OnInit } from '@angular/core';
import { OrderDetailsServiceService } from 'src/app/order-details-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  public restaurantDetails: any[]= [];
  public totalRestaurants: any;

  constructor(private service:OrderDetailsServiceService) { }

  ngOnInit() {
    this.service.getRestaurantDetails()
   .subscribe(data => this.restaurantDetails= data.Result);
    this.service.getRestaurantDetails()
      .subscribe(data => this.totalRestaurants=data.totalRestaurants);
    console.log(this.totalRestaurants);
  }

}