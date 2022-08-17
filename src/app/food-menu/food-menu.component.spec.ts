import { TestBed, async, inject } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FoodMenuComponent } from './food-menu.component';
import { RestaurantService } from "src/services/restaurant-service";

describe('FoodMenuComponent', () => {
  let component: FoodMenuComponent;
  let fixture: ComponentFixture<FoodMenuComponent>;
  let menuService:RestaurantService;
  let item:any;
  let element;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[RestaurantService]
    })
    .compileComponents();
  });

  beforeEach(inject([RestaurantService], (m: RestaurantService) => {
    menuService = m;
    fixture = TestBed.createComponent(FoodMenuComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  }));
  
  it("should call getRestaurantDetails and return list of menu", async(() => {
    const response: FoodMenuComponent[] = [];

    spyOn(menuService, 'getRestaurantDetails').and.returnValue(of(response))

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.MenuDetails).toEqual(response);
  }));

  
  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should run add() method', () =>
  {
    component.add(item);
  })
  
});
