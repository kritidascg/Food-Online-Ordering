import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  
  public search = new BehaviorSubject<string>("");
 
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.cartItemList.map((cartItem: { menuId: any; quantity: number; }) =>
      {
        if(cartItem.menuId===product.menuId)
        {
          ++cartItem.quantity;
        }
        else{
          this.cartItemList.push(product);
          this.productList.next(this.cartItemList);
        }
      })
    }

   removeCartItem(product: any){
    this.cartItemList.map((item:any, index:any)=>{
      if(product.menuId === item.menuId){
        this.cartItemList.splice(index,1);

      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }



}


