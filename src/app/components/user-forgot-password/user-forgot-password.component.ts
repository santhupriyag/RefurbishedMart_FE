import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.css']
})
export class UserForgotPasswordComponent {


  registerForm: FormGroup | any;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder, private userservice: UserService,
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
      this.userservice.resetPassword(user).subscribe((res:any) => {
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
