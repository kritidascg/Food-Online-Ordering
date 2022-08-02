import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/models/filter.pipe';
import { RestaurantService } from 'src/services/restaurant-service';

import { RestaurantComponent } from './restaurants.component';

describe('MenuComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  beforeEach(async () => {
     await TestBed.configureTestingModule({
      declarations: [ RestaurantComponent , FilterPipe],
      imports:[RouterTestingModule,HttpClientTestingModule, FormsModule],
      providers:[RestaurantService]
    })
    .compileComponents();
  });
    
  beforeEach( () => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // const restaurants = fixture.debugElement.injector.get(RestaurantService);
    // const spy = spyOn(RestaurantService, 'getRestaurantDetails')
    //       .and.returnValue(Promise.resolve(testQuote));
    // const de = fixture.debugElement.query(By.css('.foodbox'));
    // const el = de.nativeElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
