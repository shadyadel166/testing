import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

export const routes: Routes = [

    {path:"",redirectTo:"home",pathMatch:"full"},

    {path:"home",component: HomeComponent},
    {path:"products",component: ProductListComponent},
    {path:"login",component: LoginComponent},
    {path:"register",component: RegisterComponent},
    {path:"details/:id",component: ProductDetailsComponent},
    {path:"**", redirectTo: "home",pathMatch:"full"}
];
