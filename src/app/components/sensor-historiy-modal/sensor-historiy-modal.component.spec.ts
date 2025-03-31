import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorHistoriyModalComponent } from './sensor-historiy-modal.component';

describe('SensorHistoriyModalComponent', () => {
  let component: SensorHistoriyModalComponent;
  let fixture: ComponentFixture<SensorHistoriyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorHistoriyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorHistoriyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
