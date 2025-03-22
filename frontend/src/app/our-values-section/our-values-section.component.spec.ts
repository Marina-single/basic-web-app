import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurValuesSectionComponent } from './our-values-section.component';

describe('OurValuesSectionComponent', () => {
  let component: OurValuesSectionComponent;
  let fixture: ComponentFixture<OurValuesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurValuesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurValuesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
