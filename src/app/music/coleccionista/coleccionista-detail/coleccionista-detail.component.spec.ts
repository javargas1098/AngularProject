import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ColeccionistaDetailComponent } from './coleccionista-detail.component';
import { Comentario } from "../../models/comentario";
import { ArtistaFavorito } from "../../models/artistaFavorito";
import { ColeccionistaAlbum } from "../../models/coleccionistaAlbum";
import { datatype } from "faker";
import { RouterTestingModule } from "@angular/router/testing";
import { NotFoundComponent } from '../../not-found/not-found.component';
import { ColeccionistaService } from '../coleccionista.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';


describe('ColeccionistaDetailComponent', () => {
  let component: ColeccionistaDetailComponent;
  let fixture: ComponentFixture<ColeccionistaDetailComponent>;
  let debug: DebugElement;

  describe('without coleccionista', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ColeccionistaDetailComponent, NotFoundComponent],
        imports: [HttpClientTestingModule,FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      })
        .compileComponents();
      fixture = TestBed.createComponent(ColeccionistaDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      debug = fixture.debugElement;
    });


    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('coleccionista should be undefined and not found page should appear', () => {
      expect(debug.query(By.css("#notfound")).childNodes.length).toBeGreaterThan(0);
    });
  });


});

describe('with collector', () => {
  let comments;
  let artista;
  let collectorAlbums;
  let getgetCollectorIdSpy;
  let getgetCollectorIdSpy2;
  let fixture: ComponentFixture<ColeccionistaDetailComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    const collectorServiceFake = jasmine.createSpyObj('ColeccionistaService', ['getCollectorId','getCollectorAlbums']);
    comments = [
      new Comentario(
        datatype.number(),
        datatype.string(),
        datatype.number()
      ),
    ];
    artista = [
      new ArtistaFavorito(
        datatype.number(),
        datatype.string(),
        datatype.string(),
        datatype.string(),
        datatype.string()
      ),
    ];
    collectorAlbums = [{
      album: {
        name: datatype.string(),
        description: datatype.string()
      }
    }

    ];
    let cs = {
      comments,
      collectorAlbums,
      favoritePerformers: artista,
      email: 'fakemail@gmail.com',
      id: 1,
      name: "test",
      telephone: "32132"
    }
    getgetCollectorIdSpy = collectorServiceFake.getCollectorId.and.returnValue(of(cs));
    getgetCollectorIdSpy2 = collectorServiceFake.getCollectorAlbums.and.returnValue(of(collectorAlbums));

    TestBed.configureTestingModule({
      declarations: [ColeccionistaDetailComponent, NotFoundComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule,RouterTestingModule.withRoutes([])],
      providers: [{ provide: ColeccionistaService, useValue: collectorServiceFake }]
    });
    fixture = TestBed.createComponent(ColeccionistaDetailComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  })

  it('comments should appear in the dom', () => {
    expect(getgetCollectorIdSpy.calls.any()).toBe(true, 'getCollector get called');
    expect(debug.query(By.css("[data-test-id=collector-comments]")).childNodes.length).toBeGreaterThan(0);
  });
  it('favorite artits should appear in the dom', () => {
    expect(getgetCollectorIdSpy.calls.any()).toBe(true, 'getCollector get called');
    expect(debug.query(By.css("[data-test-id=collector-artists]")).childNodes.length).toBeGreaterThan(0);
  });
  it('collector album should appear in the dom', () => {
    debugger;
    expect(getgetCollectorIdSpy.calls.any()).toBe(true, 'getCollector get called');
    expect(getgetCollectorIdSpy2.calls.any()).toBe(true, 'getCollector get called');
    expect(debug.query(By.css("[data-test-id=collector-album]")).childNodes.length).toBeGreaterThan(0);
  });
});

