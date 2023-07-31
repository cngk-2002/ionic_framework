import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise3Page } from './exercise3.page';

describe('Exercise3Page', () => {
  let component: Exercise3Page;
  let fixture: ComponentFixture<Exercise3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercise3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
