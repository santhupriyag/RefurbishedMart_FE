
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  payment:any=[];
order:any=[];
  constructor(private formBuilder: FormBuilder,
    private router: Router,private activatedRoute: ActivatedRoute,private orderservice:OrdersService) {
      this.order = JSON.parse(activatedRoute.snapshot.params["order"]);
     }

  ngOnInit(): void {
console.log(this.order)
    this.registerForm = this.formBuilder.group({
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      state:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    this.payment=this.registerForm.value;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
  }
  
  this.save();

  }

  save() {
    let order={
      "userMail":this.order.userid,
      "totalprice":this.order.tp,
      "street":this.registerForm.controls['street'].value,
      "city":this.registerForm.controls['city'].value,
      "state":this.registerForm.controls['state'].value,
      "zipCode":this.registerForm.controls['pincode'].value,
      "op": this.order.prodcts,
      "status":"Pending"
      }

    this.orderservice.saveOrder(order)
      .subscribe(data => console.log(data), error => console.log(error));
  
    this.gotoList();
  }

  gotoList() {

    this.router.navigate(["display"]);

  }
}
