import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasenClockComponent } from './seasen-clock.component';

describe('SeasenClockComponent', () => {
  let component: SeasenClockComponent;
  let fixture: ComponentFixture<SeasenClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasenClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasenClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
