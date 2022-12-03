import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReportService } from '../services/report.service'; 

@Component({
  selector: 'app-admin-sale-report',
  templateUrl: './admin-sale-report.component.html',
  styleUrls: ['./admin-sale-report.component.css']
})
export class AdminSaleReportComponent {
  public Sale : any = [];


  constructor(private reportService : ReportService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.reportService.getSaleReport().subscribe(data => {
      this.Sale = data
    }
  );   
  }


  reloadData(){
    this.reportService.getSaleReport().subscribe(data => {
      this.Sale = data
    }
  ); 
  
}
}