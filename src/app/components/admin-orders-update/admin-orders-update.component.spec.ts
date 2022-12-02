import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersUpdateComponent } from './admin-orders-update.component';

describe('AdminOrdersUpdateComponent', () => {
  let component: AdminOrdersUpdateComponent;
  let fixture: ComponentFixture<AdminOrdersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrdersUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrdersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
