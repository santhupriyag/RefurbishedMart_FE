import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'' , pathMatch:"full" , redirectTo:'home'},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent },
  {path:'adminlogin' , component:AdminloginComponent},
  {path:'adminpanel' , component:AdminpanelComponent},
  {path:'userprofile' , component:UserprofileComponent},
  {path:'allproducts' , component:AllproductsComponent},
  {path:'categories' , component:CategoriesComponent},
  {path:'wishlist' , component:WishlistComponent},
  {path:'cart' , component:CartComponent},

  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
