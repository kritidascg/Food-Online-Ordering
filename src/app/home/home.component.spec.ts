import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter={
    navigate:jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[{provide:Router, useValue:mockRouter}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to restaurants page on click of "Order Now"  in home page', () => {
     const homeTabElement=fixture.debugElement.nativeElement.querySelector('#orderNow');
     homeTabElement.click();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/restaurants']);
     
   });

  
});
