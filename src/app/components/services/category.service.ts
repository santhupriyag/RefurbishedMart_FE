import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCategorys(): Observable<any> {
    return this.http.get<any>('http://localhost:7075/RefurbishedMart/categoryController/getAllCategorys')
  }
  addCategory(category: any): Observable<Object> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/categoryController/addCategory`, category);
  }
  
  updateCategory(category: any): Observable<any> {
    return this.http.put(`http://localhost:7075/RefurbishedMart/categoryController/updateCategory`, category);
  }

  deleteCategory(id: any): Observable<any> {
    return this.http.delete(`http://localhost:7075/RefurbishedMart/categoryController/deleteCategory/${id}`, { responseType: 'text' });
  }
  getCategory(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:7075/RefurbishedMart/categoryController/getCategoryById/${id}`)
  }
}
