import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorSensorComponent } from './door-sensor.component';

describe('DoorSensorComponent', () => {
  let component: DoorSensorComponent;
  let fixture: ComponentFixture<DoorSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorSensorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoorSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
