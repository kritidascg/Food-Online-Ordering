import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/Services/restaurant-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:RestaurantService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
}
