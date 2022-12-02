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
import{LogoutComponent} from './components/logout/logout.component'
import{AdminRegisterComponent} from './components/admin-register/admin-register.component'
import{AdminlogoutComponent} from './components/adminlogout/adminlogout.component';
import{AdminProfileComponent} from './components/admin-profile/admin-profile.component'
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ListofproductsComponent } from './components/listofproducts/listofproducts.component';
import { AdminupdateComponent } from './components/adminupdate/adminupdate.component';
import { AdminproductdetailsComponent } from './components/adminproductdetails/adminproductdetails.component';
import{AddCategoryComponent} from './components/add-category/add-category.component';
import{ListCategoryComponent} from './components/list-category/list-category.component';
import{UpdateCategoryComponent} from './components/update-category/update-category.component';
import {CategorySearchComponent}  from './components/category-search/category-search.component';
import{CheckoutComponent} from './components/checkout/checkout.component';
import { DisplayComponent } from './components/display/display.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserFeedbackComponent } from './components/user-feedback/user-feedback.component';
import { UserSupportComponent } from './components/user-support/user-support.component';
import { AdminUserUpdateComponent } from './components/admin-user-update/admin-user-update.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminOrdersUpdateComponent } from './components/admin-orders-update/admin-orders-update.component';
import { UserForgotPasswordComponent } from './components/user-forgot-password/user-forgot-password.component';
import { AdminForgotPasswordComponent } from './components/admin-forgot-password/admin-forgot-password.component';
//import{}
const routes: Routes = [
  {path:'' , pathMatch:"full" , redirectTo:'home'},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent },
  {path:'logout' , component:LogoutComponent },
  // admin panel
  {path:'adminlogin' , component:AdminloginComponent},
  {path:'adminpanel' , component:AdminpanelComponent},
  {path:'addproducts' , component:AddproductsComponent},
  {path:'adminupdate/:id' , component:AdminupdateComponent},
  {path:'adminproductdetails/:id' , component:AdminproductdetailsComponent},
  {path:'listofproductsadmin' , component:ListofproductsComponent},
  {path:'userprofile/:email' , component:UserprofileComponent},
  {path:'allproducts' , component:AllproductsComponent},
  {path:'categories' , component:CategoriesComponent},
  {path:'wishlist' , component:WishlistComponent},
  {path:'cart' , component:CartComponent},
  {path:'register', component:RegisterComponent},
  {path:'adminRegister', component:AdminRegisterComponent},
  {path:'adminlogout',component:AdminlogoutComponent},
  {path:'adminprofile/:email',component:AdminProfileComponent},
  {path:'addcategory',component:AddCategoryComponent},
  {path:'listcategory',component:ListCategoryComponent},
  {path:'updatecategory/:id',component:UpdateCategoryComponent},
  {path:"csearch/:id",component:CategorySearchComponent},
  {path:"checkout/:order",component:CheckoutComponent},
  {path:"display",component:DisplayComponent},
  {path:"userorders",component:UserOrdersComponent},
  {path:"userfeedback",component:UserFeedbackComponent},
  {path:"usersupport",component:UserSupportComponent},
  {path:"adminuserupdate/:id",component:AdminUserUpdateComponent},
  {path:"adminorders",component:AdminOrdersComponent},
  {path:"adminorderupdate/:id",component:AdminOrdersUpdateComponent},
  {path:"userforgot",component:UserForgotPasswordComponent},
  {path:"adminforgot",component:AdminForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
