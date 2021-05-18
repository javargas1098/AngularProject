import { TestBed } from '@angular/core/testing';
import { MusiciansService } from './musicians.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MusiciansService', () => {
  let service: MusiciansService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusiciansService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MusiciansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
