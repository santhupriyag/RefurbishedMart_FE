import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  saveUser(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/customercontroller/registerUser`,user);
  }

}
