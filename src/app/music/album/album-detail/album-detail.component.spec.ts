/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { datatype } from "faker";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { AlbumDetailComponent } from './album-detail.component';
import { NotFoundComponent } from '../../not-found/not-found.component';
import { AlbumService } from '../album.service';
import { of } from 'rxjs';
import { Album } from "../album";
import { Comentario } from "../../models/comentario";
import { Track } from "../../models/track";
import { Performer } from "../../models/performer";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  let debug: DebugElement;
  let album;
  describe('without albums', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AlbumDetailComponent, NotFoundComponent ],
        imports: [HttpClientTestingModule,FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      })
      .compileComponents();
      fixture = TestBed.createComponent(AlbumDetailComponent);
      component = fixture.componentInstance;
      let comments = [new Comentario( datatype.number(),datatype.string(),datatype.number())];
      let tracks   = [new Track(datatype.number(),datatype.string(),datatype.string(),datatype.string(),datatype.datetime())];
      let performers= [new Performer(datatype.number(),datatype.string(),datatype.string(),datatype.string(),datatype.datetime())];
      album = new Album(
        datatype.number(),
        datatype.string(),
        datatype.string(),
        datatype.string(),
        datatype.string(),
        datatype.string(),
        datatype.datetime(),
        tracks,
        performers,
        comments
      );
      component.album = album;
      fixture.detectChanges();
      debug = fixture.debugElement;
    });


    it('should create', () => {
      expect(component).toBeTruthy();
    });


  });


});

describe('with albums', () => {
  let album;
  let getAlbumByIdSpy;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  let debug: DebugElement;

  beforeEach( () => {
    const albumServiceFake = jasmine.createSpyObj('AlbumService', ['getAlbumById']);
    let comments = [new Comentario( datatype.number(),datatype.string(),datatype.number())];
    let tracks   = [new Track(datatype.number(),datatype.string(),datatype.string(),datatype.string(),datatype.datetime())];
    let performers= [new Performer(datatype.number(),datatype.string(),datatype.string(),datatype.string(),datatype.datetime())];


    album = new Album(
      datatype.number(),
      datatype.string(),
      datatype.string(),
      datatype.string(),
      datatype.string(),
      datatype.string(),
      datatype.datetime(),
      tracks,
      performers,
      comments
    );
    getAlbumByIdSpy = albumServiceFake.getAlbumById.and.returnValue(of(album));

    TestBed.configureTestingModule({
      declarations: [ AlbumDetailComponent, NotFoundComponent ],
      imports: [HttpClientTestingModule,FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      providers: [{provide: AlbumService, useValue: albumServiceFake}]
    });
    fixture = TestBed.createComponent(AlbumDetailComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  })

  it('album name should appear in the dom', () => {
    expect(getAlbumByIdSpy.calls.any()).toBe(true, 'getAlbum get called');
    expect(debug.query(By.css("[data-test-id=album-name]")).childNodes.length).toBeGreaterThan(0);
    expect(fixture.componentInstance.album).toBe(album);
  });
});
