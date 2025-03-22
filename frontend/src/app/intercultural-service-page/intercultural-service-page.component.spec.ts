import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterculturalServicePageComponent } from './intercultural-service-page.component';

describe('InterculturalServicePageComponent', () => {
  let component: InterculturalServicePageComponent;
  let fixture: ComponentFixture<InterculturalServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterculturalServicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterculturalServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
