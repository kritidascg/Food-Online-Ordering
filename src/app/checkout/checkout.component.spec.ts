import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckoutCartComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutCartComponent;
  let fixture: ComponentFixture<CheckoutCartComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, ReactiveFormsModule],
      providers: [{ provide: Router, useValue: routerSpy },{provide: FormBuilder}]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CheckoutCartComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    });
  }));

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call orderPlaced() method', ()=>
  {
    component.orderPlaced();
    expect(routerSpy.navigate).toHaveBeenCalled();
  })
});
