import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRevenueReportComponent } from './admin-revenue-report.component';

describe('AdminRevenueReportComponent', () => {
  let component: AdminRevenueReportComponent;
  let fixture: ComponentFixture<AdminRevenueReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRevenueReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRevenueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
