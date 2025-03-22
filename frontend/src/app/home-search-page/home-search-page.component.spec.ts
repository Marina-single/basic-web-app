import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchPageComponent } from './home-search-page.component';

describe('HomeSearchPageComponent', () => {
  let component: HomeSearchPageComponent;
  let fixture: ComponentFixture<HomeSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSearchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
