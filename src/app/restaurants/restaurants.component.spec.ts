import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/models/filter.pipe';
import { RestaurantService } from 'src/services/restaurant-service';
import { Router } from '@angular/router';
import { RestaurantComponent } from './restaurants.component';

describe('MenuComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;
  let restaurantService:RestaurantService;
  let element;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
     await TestBed.configureTestingModule({
      declarations: [ RestaurantComponent , FilterPipe],
      imports:[RouterTestingModule,HttpClientTestingModule, FormsModule],
      providers:[RestaurantService, { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
  });
    
  beforeEach(inject([RestaurantService], (r: RestaurantService) => {
    restaurantService=r;
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;    
  }));

  it("should call getRestaurantDetails and return list of restaurants", async(() => {
    const response: RestaurantComponent[] = [];

    spyOn(restaurantService, 'getRestaurantDetails').and.returnValue(of(response))

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.restaurantDetails).toEqual(response);
  }));

  
  it('orderNow Method is called', () => {
    const param: any = null
    spyOn(component, 'orderNow') 
    component.orderNow(param)
    expect(component.orderNow).toHaveBeenCalledWith(param);
  });
    

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
