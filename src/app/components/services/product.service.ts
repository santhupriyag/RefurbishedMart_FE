import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  getProductsList(): Observable<any> {

    //alert(this.http.get(`${this.baseUrl}`));
    return this.http.get(`http://localhost:7075/RefurbishedMart/productcontroller/findAllProducts`);
  }

  getProduct(id: any): Observable<any> {
    return this.http.get(`http://localhost:7075/RefurbishedMart/productcontroller/product/${id}`);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(`http://localhost:7075/RefurbishedMart/productcontroller/updateProduct`, product);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`http://localhost:7075/RefurbishedMart/productcontroller/deleteProduct/${id}`, { responseType: 'text' });
  }

  newProduct(product: any): Observable<Object> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/productcontroller/addProduct`, product);
  }

}
