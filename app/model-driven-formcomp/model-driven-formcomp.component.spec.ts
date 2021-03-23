import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormcompComponent } from './model-driven-formcomp.component';

describe('ModelDrivenFormcompComponent', () => {
  let component: ModelDrivenFormcompComponent;
  let fixture: ComponentFixture<ModelDrivenFormcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDrivenFormcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFormcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
