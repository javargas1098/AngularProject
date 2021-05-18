import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Musician } from '../musician';
import { datatype } from "faker";

import { MusiciansComponent } from './musicians-list.component';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('MusiciansComponent', () => {
  let component: MusiciansComponent;
  let fixture: ComponentFixture<MusiciansComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MusiciansComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiciansComponent);
    component = fixture.componentInstance;
    component.musicians = [
      new Musician(
        datatype.number(),
        datatype.string(),
        datatype.string(),
        datatype.datetime(),
        datatype.array(),
        datatype.array()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a list", () => {
    expect(debug.query(By.css(".musicians-container")).childNodes.length).toBeGreaterThan(0);
  });
});
