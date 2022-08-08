import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']); 

  beforeEach(waitForAsync(() => {
   TestBed.configureTestingModule({
    imports:[HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
    providers: [{ provide: Router, useValue: routerSpy }]
  }).compileComponents().then(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });
}));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tell ROUTER to navigate when button clicked', fakeAsync(() => {
    let router = fixture.debugElement.injector.get(Router);
    let buttonElements = fixture.debugElement.query(By.css('.btn btn-primary'));
    buttonElements.triggerEventHandler('click', null);
    tick();
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should nav to login page')
      .toBe('/login');
  }));
});

