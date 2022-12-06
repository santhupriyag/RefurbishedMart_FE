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
  changeOrder:any;
  email:any;
  return:boolean=false;

  constructor(private ordersService : OrdersService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.email = sessionStorage.getItem('username')
    this.ordersService.getUserOrders(this.email).subscribe(data => {
      this.orders = data
      console.log(this.orders)
    }
  );   
  }

  Return(id :any){
    console.log(id)
    //this.return=true;
    this.ordersService.getOrderByid(id).subscribe(data => {
      console.log(data)
      this.changeOrder = data
      console.log(this.changeOrder)
      this.my(this.changeOrder)
    }
  );  

   }
   my(cs:any){
    console.log(cs)
     let order= {
        "id": cs.id,
        "userMail": cs.userMail,
        "totalprice": cs.totalprice,
        "street": cs.street,
        "city": cs.city,
        "state": cs.state,
        "zipCode":cs.zipCode,
        "op":cs.op,
        "status": "Return"
    }
        this.ordersService.changeOrderStatus(order)
        .subscribe(data => console.log(data), error => console.log(error)
      
        );
        this.reloadData();
        this.gotoList();
   }
  Cancel(id:any){

    console.log(id)

    this.ordersService.getOrderByid(id).subscribe(data => {
      console.log(data)
      this.changeOrder = data
      console.log(this.changeOrder)
      this.cancel(this.changeOrder)
    }
  );  
  }

  cancel(cs:any){
    console.log(cs)
     let order= {
        "id": cs.id,
        "userMail": cs.userMail,
        "totalprice": cs.totalprice,
        "street": cs.street,
        "city": cs.city,
        "state": cs.state,
        "zipCode":cs.zipCode,
        "op":cs.op,
        "status": "Cancelled"
    }
        this.ordersService.changeOrderStatus(order)
        .subscribe(data => console.log(data), error => console.log(error)
      
        );
        this.reloadData();
        this.gotoList();
   }

  reloadData() {
    this.email = sessionStorage.getItem('username')
    this.ordersService.getUserOrders(this.email).subscribe(data => {
      this.orders = data
      console.log(this.orders)
    }
  );   
  }
  gotoList() {
    this.router.navigate(['/userorders']).then(() => {
      window.location.reload();
    });
  }
}
