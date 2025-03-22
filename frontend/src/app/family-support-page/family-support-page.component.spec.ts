import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySupportPageComponent } from './family-support-page.component';

describe('FamilySupportPageComponent', () => {
  let component: FamilySupportPageComponent;
  let fixture: ComponentFixture<FamilySupportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilySupportPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilySupportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
