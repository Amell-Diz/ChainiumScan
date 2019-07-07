import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockInfoViewComponent } from './block-info-view.component';

describe('BlockInfoViewComponent', () => {
  let component: BlockInfoViewComponent;
  let fixture: ComponentFixture<BlockInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
