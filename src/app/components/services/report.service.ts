import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }



  getSaleReport(): Observable<any> {
    return this.http.get(`http://localhost:7075/RefurbishedMart/reportcontroller/getSaleReport`);
  }

  getRevenueReport(): Observable<any> {
    return this.http.get(`http://localhost:7075/RefurbishedMart/reportcontroller/getRevenueReport`);
  }
}
