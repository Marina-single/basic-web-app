import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesAboutCompanySectionComponent } from './advantages-about-company-section.component';

describe('AdvantagesAboutCompanySectionComponent', () => {
  let component: AdvantagesAboutCompanySectionComponent;
  let fixture: ComponentFixture<AdvantagesAboutCompanySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantagesAboutCompanySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagesAboutCompanySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
