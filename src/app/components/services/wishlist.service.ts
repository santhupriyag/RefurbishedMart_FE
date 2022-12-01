import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  
  getWishListByUser(userid:any): Observable<any> {

    return this.http.get(`http://localhost:7075/RefurbishedMart/wishlistcontroller/getwishListbyuserid/${userid}`);
  }

  

  deleteWishList(id: string| any): Observable<any> {
    return this.http.delete(`http://localhost:7075/RefurbishedMart/wishlistcontroller/deleteFromWishlist/${id}`, { responseType: 'text' });
  }


  addToWishList(wishlist: any): Observable<any> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/wishlistcontroller/addToWishlist`,wishlist);
  }
}
