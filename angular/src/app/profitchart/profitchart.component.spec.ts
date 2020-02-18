import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitchartComponent } from './profitchart.component';

describe('ProfitchartComponent', () => {
  let component: ProfitchartComponent;
  let fixture: ComponentFixture<ProfitchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
