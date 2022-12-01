import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service'; 
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  public orders : any = [];
  email:any;

  constructor(private ordersService : OrdersService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.email = sessionStorage.getItem('username')
    this.ordersService.getUserOrders(this.email).subscribe(data => {
      this.orders = data
      console.log(this.orders)
    }
  );   
  }

}
