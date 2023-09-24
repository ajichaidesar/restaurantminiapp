import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailmenuPage } from './detailmenu.page';

describe('DetailmenuPage', () => {
  let component: DetailmenuPage;
  let fixture: ComponentFixture<DetailmenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
