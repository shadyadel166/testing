import { NgModule, isDevMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavComponent } from "./Components/nav/nav.component";
import { RateComponent } from "./Components/rate/rate.component";
import { CartListService } from "./Services/cart-list.service";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./Components/register/register.component";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations:[	
        AppComponent,
        HomeComponent,
      LoginComponent,
      NavComponent,
      RateComponent,
      RegisterComponent,
      ProductListComponent,

   ],
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    bootstrap:[AppComponent],
    providers:[
        CartListService,
    ]
})



export class AppModule{

}