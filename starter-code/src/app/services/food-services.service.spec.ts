import { TestBed, inject } from '@angular/core/testing';

import { FoodServicesService } from './food-services.service';

describe('FoodServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodServicesService]
    });
  });

  it('should be created', inject([FoodServicesService], (service: FoodServicesService) => {
    expect(service).toBeTruthy();
  }));
});
