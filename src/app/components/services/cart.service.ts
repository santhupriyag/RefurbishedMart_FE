import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  
  getProductsList(userid:any): Observable<any> {

    return this.http.get(`http://localhost:7075/RefurbishedMart/cartcontroller/getproductsbyuserid/${userid}`);
  }



  deleteProduct(id: string| any): Observable<any> {
    return this.http.delete(`http://localhost:7075/RefurbishedMart/cartcontroller/cartproducts/${id}`, { responseType: 'text' });
  }

  deleteallcartitems(){
     this.http.delete(`http://localhost:9095/estore/cartcontroller/deleteproducts`);
  }

  newProduct(product: any): Observable<any> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/cartcontroller/addtocart`, product);
  }
}
