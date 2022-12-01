import { Component } from '@angular/core';
import {CategoryService} from '../services/category.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {category} from '../model/Category'
import{ProductService} from '../services/product.service'
import { ToastrService } from 'ngx-toastr';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  submitted = false;
  product:any={};
  getcategorys: any=[];
  category:any={};
  
  constructor(private categoryService: CategoryService,  private router: Router,private http:HttpClient,private productService:ProductService,private toastr: ToastrService) { }
  ngOnInit(): void {

    
  }
  onSubmit(form: NgForm)
  {
    this.categoryService.addCategory(this.category)
      .subscribe((res:any) => {
      if('message' in res){
          this.toastr.success('', res.message);
          form.reset();
         // this.router.navigate(['/login']);
        }
      });

  }
}
