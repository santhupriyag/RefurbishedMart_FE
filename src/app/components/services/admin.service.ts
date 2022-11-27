import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  email : string| any;
  constructor(private http:HttpClient) { }

  login(admin:any):Observable<any>
  {
    return this.http.post(`http://localhost:7075/RefurbishedMart/admincontroller/userLogin`,admin)
  }
  
  saveAdmin(admin: Object): Observable<Object> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/admincontroller/registerUser`, admin);
  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('aname')
    console.log(!(admin === null))
    return !(admin === null)
  }

  logOut() {
    sessionStorage.removeItem('aname')
  }
}
