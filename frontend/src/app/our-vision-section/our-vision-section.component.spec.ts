import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVisionSectionComponent } from './our-vision-section.component';

describe('OurVisionSectionComponent', () => {
  let component: OurVisionSectionComponent;
  let fixture: ComponentFixture<OurVisionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurVisionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurVisionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
