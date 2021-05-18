import { ColeccionistaComponent } from "./coleccionista-list.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { datatype } from "faker";
import { Coleccionista } from "../coleccionista";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

describe("ColeccionistasComponent", () => {
  let component: ColeccionistaComponent;
  let fixture: ComponentFixture<ColeccionistaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColeccionistaComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionistaComponent);
    component = fixture.componentInstance;
    component.collectors = [
      new Coleccionista(
        datatype.number(),
        datatype.string(),
        datatype.string(),
        datatype.string(),
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Component has a list", () => {
    expect(debug.query(By.css("table")).childNodes.length).toBeGreaterThan(0);
  });

});
