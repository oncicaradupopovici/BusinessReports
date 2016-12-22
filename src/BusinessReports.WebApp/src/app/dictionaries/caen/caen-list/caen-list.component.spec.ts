/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaenListComponent } from './caen-list.component';

describe('CaenListComponent', () => {
  let component: CaenListComponent;
  let fixture: ComponentFixture<CaenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
