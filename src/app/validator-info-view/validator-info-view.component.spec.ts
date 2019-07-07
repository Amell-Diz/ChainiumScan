import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorInfoViewComponent } from './validator-info-view.component';

describe('ValidatorInfoViewComponent', () => {
  let component: ValidatorInfoViewComponent;
  let fixture: ComponentFixture<ValidatorInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
