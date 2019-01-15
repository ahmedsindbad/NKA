import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewkidsComponent } from './viewkids.component';

describe('ViewkidsComponent', () => {
  let component: ViewkidsComponent;
  let fixture: ComponentFixture<ViewkidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewkidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
