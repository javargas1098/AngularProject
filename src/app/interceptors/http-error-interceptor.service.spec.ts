/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpErrorInterceptor } from './http-error-interceptor.service';

describe('Service: HttpErrorInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [HttpErrorInterceptor, ToastrService]
    });
  });

  it('should ...', inject([HttpErrorInterceptor], (service: HttpErrorInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
