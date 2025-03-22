import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsForHrSectionComponent } from './benefits-for-hr-section.component';

describe('BenefitsForHrSectionComponent', () => {
  let component: BenefitsForHrSectionComponent;
  let fixture: ComponentFixture<BenefitsForHrSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsForHrSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitsForHrSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
