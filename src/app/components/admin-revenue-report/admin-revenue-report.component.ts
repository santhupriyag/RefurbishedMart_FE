import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReportService } from '../services/report.service'; 
@Component({
  selector: 'app-admin-revenue-report',
  templateUrl: './admin-revenue-report.component.html',
  styleUrls: ['./admin-revenue-report.component.css']
})
export class AdminRevenueReportComponent {
  public Revenue : any = [];


  constructor(private reportService : ReportService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.reportService.getRevenueReport().subscribe(data => {
      this.Revenue = data
    }
  );   
  }


  reloadData(){
    this.reportService.getSaleReport().subscribe(data => {
      this.Revenue = data
    }
  ); 
  
}
}