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
  productQuantity: any = [];


  constructor(private cartService: CartService, public service: RestaurantService, private actRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
      });
    console.log(this.products);

    for (let i = 0; i <= this.products.length; i++) {
      this.productQuantity[i] = 1;
    }
    this.products.forEach((e: { foodPrice: any; }) => {
      this.totalCartPrice += e.foodPrice;
    })

  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptyCart() {
    this.cartService.removeAllCart();
    this.totalCartPrice = 0;
  }

  shopMore() {
    this.router.navigate(['restaurants']);
  }

  checkout() {
    this.router.navigate(['checkout']);
  }

  stepUp(price: number, i: number) {
    this.productQuantity[i]++;
    this.totalCartPrice = this.totalCartPrice + price;
    }

  stepDown(price: number, i: number) {
    if (this.productQuantity[i] !== 0 && this.foodPrice !== 0) {
      this.productQuantity[i]--;
      this.totalCartPrice = this.totalCartPrice - price;
      }
      else{
      if(this.productQuantity === 0)
      alert("Select quantity")
      }

    
  }
}

