import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkidComponent } from './addkid.component';

describe('AddkidComponent', () => {
  let component: AddkidComponent;
  let fixture: ComponentFixture<AddkidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
