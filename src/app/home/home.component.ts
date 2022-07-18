import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/services/restaurant-service';
import { take } from 'rxjs';
import { IRestaurantDetails } from 'src/models/restaurantDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:RestaurantService) { }
  restaurantList: any;
  ngOnInit(): void {
    
  }
}
