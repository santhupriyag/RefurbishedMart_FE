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
