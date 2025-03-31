import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecurityComponent } from './page-security.component';

describe('PageSecurityComponent', () => {
  let component: PageSecurityComponent;
  let fixture: ComponentFixture<PageSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
