import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GorodPage } from './gorod.page';

describe('GorodPage', () => {
  let component: GorodPage;
  let fixture: ComponentFixture<GorodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GorodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
