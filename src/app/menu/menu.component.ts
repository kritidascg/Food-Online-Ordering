import { Component, OnInit } from '@angular/core';
import { OrderDetailsServiceService } from 'src/app/order-details-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsServiceService) { }
  restaurantData:any;
  ngOnInit(): void {
    this.restaurantData = this.service.RestaurantDetails;
  }

}