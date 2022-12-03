import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(private http:HttpClient) { }

  saveSupport(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/supportcontroller/saveSupport`,user);
  }

  getAllSupports(): Observable<any> {
    return this.http.get(`http://localhost:7075/RefurbishedMart/supportcontroller/getSupports`);
  }
}
