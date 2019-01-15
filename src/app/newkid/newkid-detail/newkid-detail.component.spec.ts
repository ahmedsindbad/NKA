import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkidDetailComponent } from './newkid-detail.component';

describe('NewkidDetailComponent', () => {
  let component: NewkidDetailComponent;
  let fixture: ComponentFixture<NewkidDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewkidDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewkidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
