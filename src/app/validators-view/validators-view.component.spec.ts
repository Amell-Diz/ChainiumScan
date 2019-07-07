import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsViewComponent } from './validators-view.component';

describe('ValidatorsViewComponent', () => {
  let component: ValidatorsViewComponent;
  let fixture: ComponentFixture<ValidatorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
