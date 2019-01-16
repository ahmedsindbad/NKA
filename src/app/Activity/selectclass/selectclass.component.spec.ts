import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectclassComponent } from './selectclass.component';

describe('SelectclassComponent', () => {
  let component: SelectclassComponent;
  let fixture: ComponentFixture<SelectclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
