import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/services/restaurant-service';


@Component({
  selector: 'app-menu',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantComponent implements OnInit {

  searchKey:string ="";
  public restaurantDetails: any;
   i: any;
  
  constructor(private service:RestaurantService, private router: Router) { }

  ngOnInit() {
    this.service.getRestaurantDetails()
   .subscribe(data => {this.restaurantDetails= data});
   }
  
  orderNow(i:number)
  {
    console.log(i);
    this.router.navigate(['menu', i]);

  }

}
  
  