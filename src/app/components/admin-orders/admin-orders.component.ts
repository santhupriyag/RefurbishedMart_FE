import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrdersService } from '../services/orders.service';
@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit  {

  public Orders : any = [];


  constructor(private ordersService : OrdersService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.ordersService.getAllOrders().subscribe(data => {
      this.Orders = data
    }
  );   
  }


  reloadData(){
    this.ordersService.getAllOrders().subscribe(data => {
      this.Orders = data
    }
  ); 
  }
  updateorder(id:any){
    this.router.navigate(['adminorderupdate',id])
  }
}
