import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropComponent } from './menu-drop.component';

describe('MenuDropComponent', () => {
  let component: MenuDropComponent;
  let fixture: ComponentFixture<MenuDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
