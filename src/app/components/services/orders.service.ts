import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

 
  saveOrder(order: any): Observable<Object> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/ordercontroller/saveOrders`, order);
  }

  getUserOrders(email: string): Observable<any> {
    return this.http.get(`http://localhost:7075/RefurbishedMart/ordercontroller/getUserOrders/${email}`);
  }
}
