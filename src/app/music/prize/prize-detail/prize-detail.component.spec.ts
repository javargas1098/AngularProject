/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { datatype } from "faker";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { PrizeDetailComponent } from './prize-detail.component';
import { NotFoundComponent } from '../../not-found/not-found.component';
import { PrizeService } from '../prize.service';
import { of } from 'rxjs';
import { Prize } from "../prize";
import { Comentario } from "../../models/comentario";
import { Track } from "../../models/track";

describe('PrizeDetailComponent', () => {
  let component: PrizeDetailComponent;
  let fixture: ComponentFixture<PrizeDetailComponent>;
  let debug: DebugElement;
  let prize;
  describe('without prizes', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ PrizeDetailComponent, NotFoundComponent ],
        imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      })
      .compileComponents();
      fixture = TestBed.createComponent(PrizeDetailComponent);
      component = fixture.componentInstance;

      prize = new Prize(
        datatype.number(),
        datatype.string(),
        datatype.string(),
        datatype.string()
      );
      component.prize = prize;
      fixture.detectChanges();
      debug = fixture.debugElement;
    });


    it('should create', () => {
      expect(component).toBeTruthy();
    });


  });


});

describe('with prizes', () => {
  let prize;
  let getPrizeByIdSpy;
  let getPrizeByIdSpy2;
  let fixture: ComponentFixture<PrizeDetailComponent>;
  let debug: DebugElement;

  beforeEach( () => {
    const prizeServiceFake = jasmine.createSpyObj('PrizeService', ['getPrizeById2','getPrizeById']);

    prize = new Prize(
      datatype.number(),
      datatype.string(),
      datatype.string(),
      datatype.string()
    );
    getPrizeByIdSpy = prizeServiceFake.getPrizeById2.and.returnValue(of(prize));
    getPrizeByIdSpy2 = prizeServiceFake.getPrizeById.and.returnValue(of(prize));

    TestBed.configureTestingModule({
      declarations: [ PrizeDetailComponent, NotFoundComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [{provide: PrizeService, useValue: prizeServiceFake}]
    });
    fixture = TestBed.createComponent(PrizeDetailComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  })

  it('prize name should appear in the dom', () => {
    expect(getPrizeByIdSpy2.calls.any()).toBe(true, 'getPrize get called');
    expect(getPrizeByIdSpy.calls.any()).toBe(true, 'getPrizeDetail get called');
    expect(debug.query(By.css("[data-test-id=prize-name]")).childNodes.length).toBeGreaterThan(0);
    // expect(fixture.componentInstance.prize).toBe(prize);
  });
  // it('prize name should appear in the dom', () => {
  //   expect(getPrizeByIdSpy.calls.any()).toBe(true, 'getPrizeDetail get called');
  //   expect(debug.query(By.css("[data-test-id=prize-name]")).childNodes.length).toBeGreaterThan(0);
  //   // expect(fixture.componentInstance.prize).toBe(prize);
  // });
});
