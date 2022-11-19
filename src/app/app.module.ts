import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
