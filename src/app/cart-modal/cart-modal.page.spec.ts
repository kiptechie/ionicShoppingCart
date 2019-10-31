import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartModalPage } from './cart-modal.page';

describe('CartModalPage', () => {
  let component: CartModalPage;
  let fixture: ComponentFixture<CartModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
