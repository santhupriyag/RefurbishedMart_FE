import { Component } from '@angular/core';
import{CategoryService} from '../services/category.service'
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  updatecategory(id:any){
    this.router.navigate(['updatecategory',id]);
  }

  // detailspage(id:any){
  //   this.router.navigate(['adminproductdetails',id]);
  // }
  Categorys: any=[];

  constructor( private categoryService: CategoryService,
    private router:Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {
    this.categoryService.getAllCategorys().subscribe(data => {
      this.Categorys = data;
      console.log(this.Categorys)
    })
  }

  // productDetails(id: number){
  //   this.router.navigate(['view', id]);
  // }

  // editProduct(id: number) {
  //   this.router.navigate(['updateproduct',id])  // navigate to component from a method
  // }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
