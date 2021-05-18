/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ColeccionistaService } from './coleccionista.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Coleccionista', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColeccionistaService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([ColeccionistaService], (service: ColeccionistaService) => {
    expect(service).toBeTruthy();
  }));
});
