import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/services/cart-service.service';
import { RestaurantService } from 'src/services/restaurant-service';
import { IRestaurantDetails } from '../../models/restaurantDetails';

@Component({
  selector: 'app-menu',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantComponent implements OnInit {

  restId: string= ''; 
  public filterCategory : any
  searchKey:string ="";
  public restaurantDetails: any;

  constructor(private service:RestaurantService, private cartservice: CartService, private router: Router) { }

  ngOnInit() {
    this.service.getRestaurantDetails()
   .subscribe(data => this.restaurantDetails= data.Result);

   this.cartservice.search.subscribe((val:any)=>{
    this.searchKey = val;
  })
  }

  filter(category:string){
    this.filterCategory = this.restaurantDetails
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  displaymenuitem(i:number) {
    this.restId=this.restaurantDetails.Result[i].menu;
    console.log( this.restId);
    this.router.navigate(['menu',this.restId])
  
  }

  sendRestaurantDetails(restaurantDetails : IRestaurantDetails[])
  {
    this.service.sendRestaurantList(restaurantDetails);
  }
}