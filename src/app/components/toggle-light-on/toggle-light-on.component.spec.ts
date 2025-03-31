import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLightOnComponent } from './toggle-light-on.component';

describe('ToggleLightOnComponent', () => {
  let component: ToggleLightOnComponent;
  let fixture: ComponentFixture<ToggleLightOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleLightOnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleLightOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
