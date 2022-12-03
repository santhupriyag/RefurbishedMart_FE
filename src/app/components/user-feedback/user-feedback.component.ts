import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service'; 
// import { NotificationService } from '../services/notification.service';
import { User } from '../model/User';
import { Response } from '../model/response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent {
  registerForm: FormGroup | any;
  submitted = false;
  response:any = new Response();

  constructor(
    private formBuilder: FormBuilder, private feedbackservice: FeedbackService,
    private router: Router,private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      select: ["", [Validators.required]],
      textArea:['',[Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.saveSupport();
   
  }
  saveSupport(){
    let user = {
      "firstname": this.registerForm.controls['fname'].value,
      "lastname": this.registerForm.controls['lname'].value,
      "email": this.registerForm.controls['email'].value,
      "rating": this.registerForm.controls['select'].value,
     "feedback":this.registerForm.controls['textArea'].value
      }

    console.log(user)
    this.feedbackservice.saveFeedback(user).subscribe((res:any) => {
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
