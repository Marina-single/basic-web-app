import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleInPageComponent } from './settle-in-page.component';

describe('SettleInPageComponent', () => {
  let component: SettleInPageComponent;
  let fixture: ComponentFixture<SettleInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettleInPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettleInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
