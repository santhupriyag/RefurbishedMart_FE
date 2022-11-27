import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  email : string| any;



  constructor(private http:HttpClient) { }

  saveUser(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/customercontroller/registerUser`,user);
  }

  login(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:7075/RefurbishedMart/customercontroller/userLogin`,user)
  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    this.email = sessionStorage.getItem('username')
    return !(user === null)

  }

  logOut() {
    sessionStorage.removeItem('username');
  }

}
