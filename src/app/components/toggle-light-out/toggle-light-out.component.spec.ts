import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLightOutComponent } from './toggle-light-out.component';

describe('ToggleLightOutComponent', () => {
  let component: ToggleLightOutComponent;
  let fixture: ComponentFixture<ToggleLightOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleLightOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleLightOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
