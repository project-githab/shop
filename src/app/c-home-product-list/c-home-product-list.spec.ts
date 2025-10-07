import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHomeProductList } from './c-home-product-list';

describe('CHomeProductList', () => {
  let component: CHomeProductList;
  let fixture: ComponentFixture<CHomeProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CHomeProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHomeProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
