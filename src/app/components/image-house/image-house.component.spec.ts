import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHouseComponent } from './image-house.component';

describe('ImageHouseComponent', () => {
  let component: ImageHouseComponent;
  let fixture: ComponentFixture<ImageHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
