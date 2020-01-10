import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatviewComponent } from './seatview.component';

describe('SeatviewComponent', () => {
  let component: SeatviewComponent;
  let fixture: ComponentFixture<SeatviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
