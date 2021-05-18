import { AlbumComponent } from "./album-list.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { datatype } from "faker";
import { Album } from "../album";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
describe("AlbumComponent", () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      imports: [HttpClientTestingModule,FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    component.albums = [
      new Album(
        datatype.number(),
        datatype.string(),
        datatype.string(),
        datatype.string(),
        datatype.string(),
        datatype.string(),
        datatype.datetime(),
      ),
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
