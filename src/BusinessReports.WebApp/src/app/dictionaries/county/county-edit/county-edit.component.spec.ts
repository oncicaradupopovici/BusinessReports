/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountyEditComponent } from './county-edit.component';

describe('CountyEditComponent', () => {
  let component: CountyEditComponent;
  let fixture: ComponentFixture<CountyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
