import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
    // const productExistInCart = this.cartItemList.find(({menuId}) => menuId === product.name);
    // if (!productExistInCart) {
    //   this.cartItemList.push({...product, quantity:1});
    //   this.productList.next(this.cartItemList);// enhance "porduct" opject with "num" property
    //   return;

    // }

    // productExistInCart.num += 1;
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
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


