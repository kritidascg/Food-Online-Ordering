import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/security/auth.service';
import { CartService } from 'src/services/cart.service';
import { AppComponent } from '../app.component';
import { CheckoutCartComponent } from '../checkout/checkout.component';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service:CartService;
  let item:any;
  let routerSpy = { navigate: jasmine.createSpy('navigate') }
  const authServiceSpy = jasmine.createSpyObj(CartService, ['getProducts', 'addtoCart','removeCartItem','removeAllCart']);
  let spy:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ CartComponent, AppComponent, HomeComponent],
  
        imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
  
        providers: [
  
          { provide: AuthService, Router, useValue: authServiceSpy } ]
       
    })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });
   

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('stepUp Method is called', () => {
  component.stepUp(item);
  });

it('total price increases in stepup()', () =>
{
  expect(component.totalCartPrice).toEqual(component.totalCartPrice + component.foodPrice);
})

it('stepDown Method is called', () => {
  component.stepDown(item);   
});


  
it('empty the cart on calling emptycart() method', () =>
{
  component.emptyCart();
    expect(service.cartItemList).toBe([]);
    expect(component.totalCartPrice).toEqual(0);
})

it('should navigate to restaurants page on click of Shop More', () =>
{
  component.shopMore();
  expect (routerSpy.navigate).toHaveBeenCalledWith(['/restaurants']);
})

it('should navigate to checkout page on click of Place Order', () =>
{
  component.checkout();
  expect (routerSpy.navigate).toHaveBeenCalledWith(['/checkout']);
})
});
