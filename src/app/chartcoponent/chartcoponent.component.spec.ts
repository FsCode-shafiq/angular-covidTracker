import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartcoponentComponent } from './chartcoponent.component';

describe('ChartcoponentComponent', () => {
  let component: ChartcoponentComponent;
  let fixture: ComponentFixture<ChartcoponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartcoponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartcoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
