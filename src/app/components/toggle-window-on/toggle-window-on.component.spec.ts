import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleWindowOnComponent } from './toggle-window-on.component';

describe('ToggleWindowOnComponent', () => {
  let component: ToggleWindowOnComponent;
  let fixture: ComponentFixture<ToggleWindowOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleWindowOnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleWindowOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
