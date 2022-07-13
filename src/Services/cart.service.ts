import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
  }

   removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product._id=== a._id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }


getCart(): Cart{
  return this.cartSubject.value;
}

private getCartFromLocalStorage(): Cart {
  const cartJson = localStorage.getItem('Cart');
  return cartJson ? JSON.parse(cartJson) : new Cart();
}
}


