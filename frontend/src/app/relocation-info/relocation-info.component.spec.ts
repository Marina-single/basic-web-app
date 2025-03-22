import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocationInfoComponent } from './relocation-info.component';

describe('RelocationInfoComponent', () => {
  let component: RelocationInfoComponent;
  let fixture: ComponentFixture<RelocationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelocationInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelocationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
