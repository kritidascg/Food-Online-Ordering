import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/security/auth.service';
import { CartService } from 'src/services/cart.service';
import { AppComponent } from '../app.component';
import { CheckoutCartComponent } from '../checkout/checkout.component';
import { HomeComponent } from '../home/home.component';
import { RestaurantComponent } from '../restaurants/restaurants.component';
import data from '../server/details.json';
import { of } from 'rxjs';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;
  let debugElement: DebugElement;
  let item= data[0].foodMenu[0];
  let foodItem= Object.assign({item,quantity:1});

  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  
  const authServiceSpy = jasmine.createSpyObj(CartService, ['getProducts', 'addtoCart','removeCartItem','removeAllCart']);
  
  beforeEach(() => {
      TestBed.configureTestingModule({
      declarations: [CartComponent, AppComponent, HomeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'restaurants', component: RestaurantComponent },
          { path: 'checkout', component: CheckoutCartComponent }
      ]), ReactiveFormsModule],  
        providers: [
  
          { provide: AuthService, Router, useValue: authServiceSpy, routerSpy } ]
       
    });

    });

  beforeEach(inject([CartService], (r: CartService) => {
    cartService=r;
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
      }));
   

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it("should call getProducts and return list of cart items", async(() => {
    const response: CartComponent[] = [];
    spyOn(cartService, 'getProducts').and.returnValue(of(response))
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.products).toEqual(response);
  }));


  it('stepUp Method is called', () => {
  component.stepUp(foodItem);
  expect(component.totalCartPrice).toEqual(component.totalCartPrice + item.foodPrice);
  });



it('stepDown Method is called', () => {
  const param: any = null
  component.stepDown(foodItem);
     authServiceSpy.removeCartItem(param);
    expect(authServiceSpy.removeCartItem).toHaveBeenCalled();   
  
});


  
it('empty the cart on calling emptycart() method', () =>
{
  component.emptyCart ();
    authServiceSpy.removeAllCart();
    expect(authServiceSpy.removeAllCart).toHaveBeenCalled();
})

it('should navigate to restaurants page on click of Shop More', () =>
{
  const router = TestBed.get(Router);
  const spy= spyOn(router,'navigate');
  component.shopMore();
  expect (spy).toHaveBeenCalledWith(['/restaurants']);
})

it('should navigate to checkout page on click of Place Order', () =>
{
  const router = TestBed.get(Router);
  const spy= spyOn(router,'navigate');
  component.checkout();
  expect (spy).toHaveBeenCalledWith(['/checkout']);
})
});
