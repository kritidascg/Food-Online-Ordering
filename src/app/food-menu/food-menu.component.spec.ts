import { TestBed, async, inject } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FoodMenuComponent } from './food-menu.component';
import { RestaurantService } from "src/services/restaurant-service";
import { CartService } from "src/services/cart.service";

describe('FoodMenuComponent', () => {
  let component: FoodMenuComponent;
  let fixture: ComponentFixture<FoodMenuComponent>;
  let menuService:RestaurantService;
  let item:any;
  let element;
  const ServiceSpy = jasmine.createSpyObj(CartService, ['getProducts', 'addtoCart','removeCartItem','removeAllCart']);
  const restServiceSpy = jasmine.createSpyObj(RestaurantService, ['getRestaurantDetails']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[{ provide: CartService, RestaurantService, useValue: ServiceSpy,restServiceSpy } ]
    })
    .compileComponents();
  });

  beforeEach(inject([RestaurantService], (m: RestaurantService) => {
    menuService = m;
    fixture = TestBed.createComponent(FoodMenuComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  }));
  
    
  it('should create', () => {
    expect(component).toBeDefined();
  });

  
  it('addToCart Method is called', () => {

    const param: any = null;
    component.add(param);
   ServiceSpy.addtoCart();
    expect( ServiceSpy.addtoCart).toHaveBeenCalledWith(param);

   

  });
  
});
