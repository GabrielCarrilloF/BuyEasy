import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoToPayPage } from './go-to-pay.page';

describe('GoToPayPage', () => {
  let component: GoToPayPage;
  let fixture: ComponentFixture<GoToPayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
