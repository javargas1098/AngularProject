import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AlbumService } from './album.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('Service: Album', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumService],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    });
  });

  it('should ...', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
