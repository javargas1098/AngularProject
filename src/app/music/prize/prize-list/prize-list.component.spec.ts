import { PrizeComponent } from "./prize-list.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { datatype } from "faker";
import { Prize } from "../prize";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

describe("PrizeComponent", () => {
  let component: PrizeComponent;
  let fixture: ComponentFixture<PrizeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrizeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeComponent);
    component = fixture.componentInstance;
    component.prizes = [
      new Prize(
        datatype.number(),
        datatype.string(),
        datatype.string(),
        datatype.string()
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Component has a list", () => {
    expect(debug.query(By.css(".wrapper")).childNodes.length).toBeGreaterThan(0);
  });

});
