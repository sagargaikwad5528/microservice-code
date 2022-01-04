import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseFlightComponent } from './release-flight.component';

describe('ReleaseFlightComponent', () => {
  let component: ReleaseFlightComponent;
  let fixture: ComponentFixture<ReleaseFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
