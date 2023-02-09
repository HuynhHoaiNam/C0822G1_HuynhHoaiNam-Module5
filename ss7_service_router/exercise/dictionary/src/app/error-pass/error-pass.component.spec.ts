import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPassComponent } from './error-pass.component';

describe('ErrorPassComponent', () => {
  let component: ErrorPassComponent;
  let fixture: ComponentFixture<ErrorPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
