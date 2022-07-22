import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { RestaurantService } from 'src/services/restaurant-service';
import { FoodMenuComponent } from '../food-menu/food-menu.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  public products : any = [];
  totalCartPrice:number=0;
  productQuantity:number=1;
 

  constructor(private cartService : CartService, public service:RestaurantService, private actRoute: ActivatedRoute, private router: Router) { }

  
  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
       });
     
     this.totalCartPrice=this.products.foodPrice;
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
    this.router.navigate(['restaurants']);
  }

  checkout()
  {
    this.router.navigate(['checkout']);
  }

  stepUp(price:number){
    this.productQuantity ++;
    this.totalCartPrice= this.totalCartPrice+ this.products.foodPrice;
    console.log(this.totalCartPrice);

 }
 stepDown(price:number){
   if (this.productQuantity !== 0 && this.products.foodPrice !== 0)
   this.productQuantity --;
   this.totalCartPrice= this.totalCartPrice-this.products.foodPrice;

     if(this.productQuantity===0){
       alert("Select quantity")
       this.totalCartPrice=0;
     }
     console.log(this.totalCartPrice);





   }
 }

