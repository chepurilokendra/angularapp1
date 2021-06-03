import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component'
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { UnisexComponent } from './unisex/unisex.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserListComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    BootstrapComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    PagenotfoundComponent,
    TestComponent,
    UserComponent,
    MenComponent,
    WomenComponent,
    UnisexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
