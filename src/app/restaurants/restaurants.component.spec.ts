import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/models/filter.pipe';

import { RestaurantComponent } from './restaurants.component';

describe('MenuComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  beforeEach(async () => {
     await TestBed.configureTestingModule({
      declarations: [ RestaurantComponent , FilterPipe],
      imports:[RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  });
    
  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
