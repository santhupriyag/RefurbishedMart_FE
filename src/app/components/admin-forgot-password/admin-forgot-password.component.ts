import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service'; 
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-forgot-password',
  templateUrl: './admin-forgot-password.component.html',
  styleUrls: ['./admin-forgot-password.component.css']
})
export class AdminForgotPasswordComponent {

  registerForm: FormGroup | any;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder, private adminService: AdminService,
    private router: Router,private toastr: ToastrService
  ) { }
    ngOnInit(): void {

      this.registerForm = this.formBuilder.group({
       
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }
  
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
  
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      this.resetPassword();
     
    }
    resetPassword(){
      let user = {
        "email": this.registerForm.controls['email'].value,
        "password": this.registerForm.controls['password'].value,
        }
  
      console.log(user)
      this.adminService.resetPassword(user).subscribe((res:any) => {
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
