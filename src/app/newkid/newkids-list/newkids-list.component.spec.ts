import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkidsListComponent } from './newkids-list.component';

describe('NewkidsListComponent', () => {
  let component: NewkidsListComponent;
  let fixture: ComponentFixture<NewkidsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewkidsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewkidsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
