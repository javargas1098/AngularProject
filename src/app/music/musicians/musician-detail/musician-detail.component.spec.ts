import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Musician } from '../musician';
import { datatype } from "faker";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { MusicianDetailComponent } from './musician-detail.component';
import { NotFoundComponent } from '../../not-found/not-found.component';
import { MusiciansService } from '../musicians.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('MusicianDetailComponent', () => {
  let component: MusicianDetailComponent;
  let fixture: ComponentFixture<MusicianDetailComponent>;
  let debug: DebugElement;
  let musician;

  describe('without musicians', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [MusicianDetailComponent, NotFoundComponent],
        imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), ReactiveFormsModule, NgbModule],
        providers: [DatePipe]
      })
        .compileComponents();
      fixture = TestBed.createComponent(MusicianDetailComponent);
      component = fixture.componentInstance;
      musician = new Musician(
        datatype.number(),
        datatype.string(),
        datatype.string(),
        datatype.datetime()
      )
      fixture.detectChanges();
      debug = fixture.debugElement;
    });


    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('musician should be undefined and not found page should appear', () => {
      expect(debug.query(By.css("#notfound")).childNodes.length).toBeGreaterThan(0);
    });
  });


});

describe('with musicians', () => {
  let musician;
  let getMusicianByIdSpy;
  let fixture: ComponentFixture<MusicianDetailComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    const musicianServiceFake = jasmine.createSpyObj('MusiciansService', ['getMusicianById']);
    musician = new Musician(
      datatype.number(),
      datatype.string(),
      datatype.string(),
      datatype.datetime()
    )
    getMusicianByIdSpy = musicianServiceFake.getMusicianById.and.returnValue(of(musician));

    TestBed.configureTestingModule({
      declarations: [MusicianDetailComponent, NotFoundComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), ReactiveFormsModule, NgbModule],
      providers: [{ provide: MusiciansService, useValue: musicianServiceFake }, DatePipe]
    });
    fixture = TestBed.createComponent(MusicianDetailComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  })

  it('musician name should appear in the dom', () => {
    expect(getMusicianByIdSpy.calls.any()).toBe(true, 'getMusician get called');
    expect(debug.query(By.css("[data-test-id=musician-name]")).childNodes.length).toBeGreaterThan(0);
    expect(fixture.componentInstance.musician).toBe(musician);
  });
});
