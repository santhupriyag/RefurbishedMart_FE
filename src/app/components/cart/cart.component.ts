import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;
  response:any;

  constructor(private cartService : CartService,private router:Router,private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {

    let email = sessionStorage.getItem('username')
    this.cartService.getProductsList(email).subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  );   
  }

  reloadData() {
    
    let email = sessionStorage.getItem('username')
    this.cartService.getProductsList(email).subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  ); 
  }

  removeitem(id :any) {
    this.cartService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success('', "Product Deleted SucessFully!")
          this.reloadData();
        },
        error => console.log(error));
        // this.cartService.deleteProduct(id).subscribe((res:any) => {
        //   console.log(res)
        //   this.response=res;
        //   this.toastr.success('', this.response.message);
        //    this.reloadData();
        // //   if('message' in res)
        // //   {
        // //    this.toastr.success('', res.message);
        // //    this.reloadData();
          
        // //  }
        // });
  }
  shopmore() {

    this.router.navigate(["allproducts"]);
  }
  
  checkout() {

  // this.router.navigate(["payment"]);
  //this.cartService.deleteallcartitems();
  // this.http.delete('http://localhost:9095/estore/cartcontroller/deleteproducts')
  // .subscribe(data => '');
    this.router.navigate(["payment"]);
  }

  TotalCost() {
    let total = 0;
    for (var i = 0; i < this.products.length; i++) {
    this.products[i].price;
            this.grandTotal = this.products[i].price * this.products[i].quantity;
            total = total + this.grandTotal
        }

  return total;
}
}
