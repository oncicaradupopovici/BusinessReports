/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountyService } from './county.service';

describe('Service: CountyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountyService]
    });
  });

  it('should ...', inject([CountyService], (service: CountyService) => {
    expect(service).toBeTruthy();
  }));
});
