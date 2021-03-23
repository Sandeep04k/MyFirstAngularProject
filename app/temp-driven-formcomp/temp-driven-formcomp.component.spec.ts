import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDrivenFormcompComponent } from './temp-driven-formcomp.component';

describe('TempDrivenFormcompComponent', () => {
  let component: TempDrivenFormcompComponent;
  let fixture: ComponentFixture<TempDrivenFormcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempDrivenFormcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDrivenFormcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
