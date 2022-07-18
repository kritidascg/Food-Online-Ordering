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
  public products : any = [];
  totalCartPrice:number=0;
  productQuantity:number=1;
  menuId: any;
  

  constructor(private cartService : CartService, public service:RestaurantService, private actRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
       });
     
     this.totalCartPrice=this.service.price;
     console.log( this.totalCartPrice);

  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
    this.totalCartPrice=0;
  }

  shopMore()
  {
    this.route.navigate(['restaurants']);
  }

  checkout()
  {
    this.route.navigate(['checkout']);
  }

  stepUp(price:number){
    this.productQuantity ++;
    this.totalCartPrice= this.totalCartPrice+ this.service.price;
    console.log(this.totalCartPrice);

 }
 stepDown(price:number){
   if (this.productQuantity !== 0 && this.service.price !== 0)
   this.productQuantity --;
   this.totalCartPrice= this.totalCartPrice-this.service.price;

     if(this.productQuantity===0){
       alert("Select quantity")
       this.totalCartPrice=0;
     }
     console.log(this.totalCartPrice);





   }
 }

