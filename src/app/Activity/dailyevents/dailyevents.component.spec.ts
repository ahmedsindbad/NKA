import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyeventsComponent } from './dailyevents.component';

describe('DailyeventsComponent', () => {
  let component: DailyeventsComponent;
  let fixture: ComponentFixture<DailyeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
