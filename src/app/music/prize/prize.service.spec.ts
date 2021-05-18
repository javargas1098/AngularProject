import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { PrizeService } from './prize.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Premios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrizeService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([PrizeService], (service: PrizeService) => {
    expect(service).toBeTruthy();
  }));
});
