import { Component, OnInit } from '@angular/core';
import{WishlistService} from '../services/wishlist.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public products : any = [];

  constructor( public wishlistservice:WishlistService,private router:Router) { }

  ngOnInit(): void {


    let email = sessionStorage.getItem('username')
    this.wishlistservice.getWishListByUser(email).subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  ); 
  }

  reloadData() {
    let email = sessionStorage.getItem('username')
    this.wishlistservice.getWishListByUser(email).subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  ); 
  }

  removeitem(id : string|any) {

    this.wishlistservice.deleteWishList(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  gotoshop() {

    this.router.navigate(["allproducts"]);
  }

}
