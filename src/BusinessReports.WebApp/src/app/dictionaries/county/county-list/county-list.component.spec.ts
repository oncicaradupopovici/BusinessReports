/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountyListComponent } from './county-list.component';

describe('CountyListComponent', () => {
  let component: CountyListComponent;
  let fixture: ComponentFixture<CountyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
