import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAdvantagesPageComponent } from './your-advantages-page.component';

describe('YourAdvantagesPageComponent', () => {
  let component: YourAdvantagesPageComponent;
  let fixture: ComponentFixture<YourAdvantagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourAdvantagesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourAdvantagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
