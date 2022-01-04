import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsanctionHistoryFlightComponent } from './trsanction-history-flight.component';

describe('TrsanctionHistoryFlightComponent', () => {
  let component: TrsanctionHistoryFlightComponent;
  let fixture: ComponentFixture<TrsanctionHistoryFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrsanctionHistoryFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrsanctionHistoryFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
