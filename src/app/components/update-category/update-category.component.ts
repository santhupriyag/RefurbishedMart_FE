import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import{CategoryService} from '../services/category.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  id: string | any;
  Category:any;
  submitted = false;
  Categorys: any=[];

  constructor(
    private route: ActivatedRoute,private router: Router,
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {

   
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategory(this.id)
      .subscribe(data => {
        console.log(data)
        this.Category = data;
        console.log(this.Category)
      }, error => console.log(error));
  }

  updateProduct() {
    this.categoryService.updateCategory(this.Category)
      .subscribe(data => console.log(data), error => console.log(error));
    this.reloadData();
    this.gotoList();
  }
 
  onSubmit() {
    this.updateProduct();    
  }
  reloadData() {
    this.categoryService.getAllCategorys().subscribe(data => {
      this.Categorys = data;
      console.log(this.Categorys)
    })
  }
  gotoList() {
    this.router.navigate(['/listcategory']).then(() => {
      window.location.reload();
    });
  }
}
