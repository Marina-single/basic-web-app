import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNeedsPageComponent } from './individual-needs-page.component';

describe('IndividualNeedsPageComponent', () => {
  let component: IndividualNeedsPageComponent;
  let fixture: ComponentFixture<IndividualNeedsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualNeedsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualNeedsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
