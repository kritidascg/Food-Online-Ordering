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
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

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

  it('should tell ROUTER to navigate when button clicked', fakeAsync(() => {
    let router = fixture.debugElement.injector.get(Router);
    let buttonElements = fixture.debugElement.query(By.css('.checkout'));
    buttonElements.triggerEventHandler('click', null);
    tick();
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should nav to success page')
      .toBe('/success');
  }));

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ CheckoutCartComponent ],
  //     imports:[RouterTestingModule,HttpClientTestingModule]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(CheckoutCartComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
