import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

import { TestComponent } from './test/test.component';
import { UnisexComponent } from './unisex/unisex.component';
import{UserComponent} from './user/user.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'test',component:TestComponent},
  {path:'user',component:UserComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'men',component:MenComponent},
    {path:'women',component:WomenComponent},
    {path:'unisex',component:UnisexComponent},
  ]
},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
