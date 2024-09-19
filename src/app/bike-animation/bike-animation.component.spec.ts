import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAnimationComponent } from './bike-animation.component';

describe('BikeAnimationComponent', () => {
  let component: BikeAnimationComponent;
  let fixture: ComponentFixture<BikeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
