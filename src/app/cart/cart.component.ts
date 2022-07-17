import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  menuId: any;
  

  constructor(private cartService : CartService, private actRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.menuId=this.actRoute.snapshot.paramMap.get('id');
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
       })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

  shopMore()
  {
    this.route.navigate(['restaurants']);
  }

  checkout()
  {
    this.route.navigate(['checkout']);
  }

}