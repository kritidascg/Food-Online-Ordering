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
  let routerSpy = { navigate: jasmine.createSpy('cart') }
  const authServiceSpy = jasmine.createSpyObj(CartService, ['getProducts', 'addtoCart','removeCartItem','removeAllCart']);
  let spy:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ CartComponent, AppComponent, HomeComponent],
  
        imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
  
        providers: [
  
          { provide: AuthService, useValue: authServiceSpy } ]
       
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
  const param: any = null
  spyOn(component, 'stepUp') 
  component.stepUp(param)
  expect(component.stepUp).toHaveBeenCalledWith(param);
});

it('stepDown Method is called', () => {
  const param: any = null
  spyOn(component, 'stepDown') 
  component.stepDown(param)
  expect(component.stepDown).toHaveBeenCalledWith(param);
});
  
});
