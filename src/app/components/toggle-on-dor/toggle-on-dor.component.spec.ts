import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleOnDorComponent } from './toggle-on-dor.component';

describe('ToggleOnDorComponent', () => {
  let component: ToggleOnDorComponent;
  let fixture: ComponentFixture<ToggleOnDorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleOnDorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleOnDorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
