import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import {CartService} from '../services/cart.service';
import{WishlistService} from '../services/wishlist.service'


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  
  products: any;
  product: any;
  searchText:any;

  constructor(private productService: ProductService,  private router: Router,private cartservice:CartService,private wishlistService:WishlistService) { }

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

  gotowishlist(id : any) {

    this.productService.getProduct(id).subscribe(data => {
      this.product = data
      console.log(this.product);
      this.addtowishlist();
    }
    );
  
  }

  addtowishlist(){
    let email = sessionStorage.getItem('username')
    let wishlist={
      "userid":email,
       "prodid":this.product.prodid,
       "prodname":this.product.name,
       "brand":this.product.brand,
       "imgpath":this.product.imgpath,
       "price":this.product.price,
      "description":this.product.description
    }
    this.wishlistService.addToWishList(wishlist)
    .subscribe(data => console.log(data), error => console.log(error));

    this.goto();
  }
  goto() {

    this.router.navigate(['wishlist']);
  }
  
}
