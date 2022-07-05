import { TestBed } from '@angular/core/testing';

import { OrderDetailsServiceService } from './restaurant-service';

describe('OrderDetailsServiceService', () => {
  let service: OrderDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
