import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPapersPage } from './my-papers.page';

describe('MyPapersPage', () => {
  let component: MyPapersPage;
  let fixture: ComponentFixture<MyPapersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPapersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPapersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
