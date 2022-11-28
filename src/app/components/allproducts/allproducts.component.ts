import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  
  products: any;
  searchText:any;
  constructor(private productService: ProductService,  private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProductsList();
    console.log(this.products)
  }
  gotocart(id : string | any) {

    // this.productservice.getProduct(id).subscribe(data => {
    //   this.product = data
    //   console.log(this.product);
    //   this.addtocart();
    // }
    // );
  
  }

  addtocart(){

    // this.cartservice.newProduct(this.product)
    // .subscribe(data => console.log(data), error => console.log(error));
    // this.product= new Product();
    // this.gotoc();
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

  addtocompare(){
    
    // this.compareservice.newProduct(this.product)
    // .subscribe(data => console.log(data), error => console.log(error));
    // this.product= new Product();
    // this.goto();
  }
  goto() {

    this.router.navigate(['compare']);
  }
  
}
