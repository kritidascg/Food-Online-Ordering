import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { RestaurantService } from 'src/services/restaurant-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  foodPrice: any;
  public products: any = [];
  totalCartPrice: number = 0;
 
  constructor(private cartService: CartService, public service: RestaurantService, private actRoute: ActivatedRoute, private router: Router) { }


  ngOnInit():void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
      });
    
      this.products.forEach((e: {
        quantity: any; foodPrice: any; 
}) => {
      this.totalCartPrice += e.foodPrice * e.quantity;
    })
    

  }
  
  emptyCart() {
    this.cartService.removeAllCart();
    this.totalCartPrice = 0;
  }

  shopMore() {
    this.router.navigate(['/restaurants']);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

  stepUp(item: any) {
    ++item.quantity;
    this.totalCartPrice = this.totalCartPrice + item.foodPrice;
    }

  stepDown(item:any) {
    if (item.quantity > 0) {
      if(item.quantity===1){
        alert("Are you sure you want to delete this item?");
        this.cartService.removeCartItem(item);
      }
       else {
        --item.quantity;
      }

    this.totalCartPrice = this.totalCartPrice - item.foodPrice;
  
    }
  
       

    
  }
}

