/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaenEditComponent } from './caen-edit.component';

describe('CaenEditComponent', () => {
  let component: CaenEditComponent;
  let fixture: ComponentFixture<CaenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
