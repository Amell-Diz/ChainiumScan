import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxInfoViewComponent } from './tx-info-view.component';

describe('TxInfoViewComponent', () => {
  let component: TxInfoViewComponent;
  let fixture: ComponentFixture<TxInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
