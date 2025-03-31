import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAlertComponent } from './security-alert.component';

describe('SecurityAlertComponent', () => {
  let component: SecurityAlertComponent;
  let fixture: ComponentFixture<SecurityAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
