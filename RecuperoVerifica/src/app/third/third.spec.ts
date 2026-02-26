import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdComponent } from './third';

describe('Third', () => {
  let component: ThirdComponent;
  let fixture: ComponentFixture<ThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
