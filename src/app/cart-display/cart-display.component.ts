import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
       })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}