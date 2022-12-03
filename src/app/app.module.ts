import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { AdminlogoutComponent } from './components/adminlogout/adminlogout.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ListofproductsComponent } from './components/listofproducts/listofproducts.component';
import { AdminupdateComponent } from './components/adminupdate/adminupdate.component';
import { AdminproductdetailsComponent } from './components/adminproductdetails/adminproductdetails.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { CategorySearchComponent } from './components/category-search/category-search.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayComponent } from './components/display/display.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserFeedbackComponent } from './components/user-feedback/user-feedback.component';
import { UserSupportComponent } from './components/user-support/user-support.component';
import { AdminUserUpdateComponent } from './components/admin-user-update/admin-user-update.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component'; 
import { AdminOrdersUpdateComponent } from './components/admin-orders-update/admin-orders-update.component';
import { UserForgotPasswordComponent } from './components/user-forgot-password/user-forgot-password.component';
import { AdminForgotPasswordComponent } from './components/admin-forgot-password/admin-forgot-password.component';
import { AdminSupportComponent } from './components/admin-support/admin-support.component';
import { AdminFeedbackComponent } from './components/admin-feedback/admin-feedback.component';
import { AdminRevenueReportComponent } from './components/admin-revenue-report/admin-revenue-report.component';
import { AdminSaleReportComponent } from './components/admin-sale-report/admin-sale-report.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminloginComponent,
    AdminpanelComponent,
    UserprofileComponent,
    AllproductsComponent,
    CategoriesComponent,
    WishlistComponent,
    CartComponent,
    LogoutComponent,
    AdminRegisterComponent,
    AdminlogoutComponent,
    AdminProfileComponent,
    AddproductsComponent,
    ListofproductsComponent,
    AdminupdateComponent,
    AdminproductdetailsComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    UpdateCategoryComponent,
    CategorySearchComponent,
    CheckoutComponent,
    DisplayComponent,
    UserOrdersComponent,
    UserFeedbackComponent,
    UserSupportComponent,
    AdminUserUpdateComponent,
    AdminOrdersComponent,
    AdminOrdersUpdateComponent,
    UserForgotPasswordComponent,
    AdminForgotPasswordComponent,
    AdminSupportComponent,
    AdminFeedbackComponent,
    AdminRevenueReportComponent,
    AdminSaleReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), FontAwesomeModule, // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
