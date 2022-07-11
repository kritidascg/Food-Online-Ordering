import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart-service.service';
import { RestaurantService } from 'src/services/restaurant-service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  public MenuDetails: any;
  addButton:boolean=false;

  constructor(private service: RestaurantService, private cartService: CartService) { }

  ngOnInit() {
    this.service.getMenuDetails()
   .subscribe(data => this.MenuDetails= data.Result);
 
}

add(item: any){
  this.cartService.addtoCart(item);
}


  }

