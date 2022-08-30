import { fakeAsync, TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RestaurantService } from './restaurant-service';

describe('CartService', () => {
  let service: CartService;
  let product:any;
  let cartItemList: any=[];
  
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule, RouterTestingModule]}
      );
      
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should remove all cart items', () => {
    service.removeAllCart();
    expect(service.cartItemList).toEqual([]);
  });
  
  it('should remove a item from list', () => {
    service.removeCartItem(product);
    expect(service.cartItemList).toEqual([]);
  });

  it('should remove an item if menuID same', () =>
  {
    service.removeCartItem(product);
    service.cartItemList.map((item:any, index:any)=>{
      if(product.menuId === item.menuId){
       expect(service.cartItemList[index]).toBe('');
      }
  })})
});