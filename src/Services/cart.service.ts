import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  
  
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    const productInCart = this.cartItemList.find(({ menuId } :{menuId:number}) => menuId === product.menuId)
    if (productInCart) {
      this.cartItemList.map((cartItem: { menuId: any; quantity: number; }) => {
        if (cartItem.menuId === product.menuId) {
          ++cartItem.quantity;
        }
      })
    }
    else {
      this.cartItemList.push({ ...product, quantity: 1 });

      this.productList.next(this.cartItemList);
    }
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


