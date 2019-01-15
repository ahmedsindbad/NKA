import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkidFormComponent } from './newkid-form.component';

describe('NewkidFormComponent', () => {
  let component: NewkidFormComponent;
  let fixture: ComponentFixture<NewkidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewkidFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewkidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
