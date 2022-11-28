import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  
  products: any;
  product: any;
  searchText:any;

  constructor(private productService: ProductService,  private router: Router,private cartservice:CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProductsList();
    console.log(this.products)
  }
  gotocart(id : any) {
    console.log(id);
    this.productService.getProduct(id).subscribe(data => {
      this.product = data
      console.log(this.product);
     this.addtocart();
    }
    );
  
  }

  addtocart(){
    let email = sessionStorage.getItem('username')
let cart={
  "userid":email,
  "productid": this.product.id,
  "name":this.product.name,
  "description":this.product.description,
  "imgpath":this.product.imgpath,
  "price":this.product.price,
  "quantity":this.product.quantity
}
    this.cartservice.newProduct(cart)
    .subscribe(data => console.log(data), error => console.log(error));
    this.gotoc();
  }
  gotoc() {

    this.router.navigate(['cart']);
  }

  gotowishlist(id : string | any) {

    // this.productservice.getProduct(id).subscribe(data => {
    //   this.product = data
    //   console.log(this.product);
    //   this.addtocompare();
    // }
    // );
  
  }

  // addtocompare(){
    
  //   this.compareservice.newProduct(this.products)
  //   .subscribe(data => console.log(data), error => console.log(error));
  //   this.product= new Product();
  //   this.goto();
  // }
  goto() {

    this.router.navigate(['wishlist']);
  }
  
}
