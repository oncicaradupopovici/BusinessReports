/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CaenService } from './caen.service';

describe('Service: Caen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaenService]
    });
  });

  it('should ...', inject([CaenService], (service: CaenService) => {
    expect(service).toBeTruthy();
  }));
});
