import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSaleReportComponent } from './admin-sale-report.component';

describe('AdminSaleReportComponent', () => {
  let component: AdminSaleReportComponent;
  let fixture: ComponentFixture<AdminSaleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSaleReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSaleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
