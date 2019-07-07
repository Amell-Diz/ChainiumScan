import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInfoViewComponent } from './address-info-view.component';

describe('AddressInfoViewComponent', () => {
  let component: AddressInfoViewComponent;
  let fixture: ComponentFixture<AddressInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
