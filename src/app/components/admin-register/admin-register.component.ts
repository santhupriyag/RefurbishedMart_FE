import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
// import { NotificationService } from '../services/notification.service';
import { User } from '../model/User';
import { Response } from '../model/response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
  response:any = new Response();

  constructor(
    private formBuilder: FormBuilder, private adminservice: AdminService,
    private router: Router,private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      uname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      aptno: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.save();
   
  }

  save() {
    
    let user = {
      "firstname": this.registerForm.controls['fname'].value,
      "lastname": this.registerForm.controls['lname'].value,
      "username": this.registerForm.controls['uname'].value,
      "password": this.registerForm.controls['password'].value,
      "contact": {
        "phno": this.registerForm.controls['phoneNo'].value,
        "email": this.registerForm.controls['email'].value,
        "address": {
          "aptno": this.registerForm.controls['aptno'].value,
          "street": this.registerForm.controls['state'].value,
          "pincode": this.registerForm.controls['pincode'].value,
          "city": this.registerForm.controls['city'].value,
          "state": this.registerForm.controls['state'].value,
          "country": this.registerForm.controls['country'].value
        }

      }

    }
    this.adminservice.saveAdmin(user)
      .subscribe((res:any) => {
        if('errorMessage' in res){
          this.toastr.error('', res.errorMessage);
         // this.router.navigate(['/login']);
        }
        else if('message' in res){
          this.toastr.success('', res.message);
         // this.router.navigate(['/login']);
        }
      });

    


  }



}
