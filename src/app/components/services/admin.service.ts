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

  getAdmin(email: string): Observable<any> {
    return this.http.get(`http://localhost:7075/RefurbishedMart/admincontroller/getAdminByMail/${email}`);
  }
  
  deleteUserByid(uid: string): Observable<any> {
    return this.http.delete(`http://localhost:7075/RefurbishedMart/admincontroller/deleteUserByid/${uid}`);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`http://localhost:7075/RefurbishedMart/admincontroller/getAllUsers`);
  }
  editProfile(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:7075/RefurbishedMart/admincontroller/editProfile`,user)
  }
  resetPassword(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:7075/RefurbishedMart/admincontroller/forgotpassword`,user)
  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('aname')
    console.log(!(admin === null))
    this.email = sessionStorage.getItem('aname')
    return !(admin === null)
  }


  logOut() {
    sessionStorage.removeItem('aname')
  }
}
