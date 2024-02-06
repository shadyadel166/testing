import { Component } from '@angular/core';
import { IProduct } from './DataTypes/product';
import { ProductListService } from './Services/product-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  

})
export class AppComponent {
  title = 'mearn-app';
  Name = '';
  age=18
  p:IProduct[]
  // prdServ:ProductListService;

  constructor(private _prdServ:ProductListService){
    // this.prdServ = _prdServ
    this.p = _prdServ.Products

  }



reciveData(data:string){
  console.log(data);
  

}
  clicked(val:string){
    console.log(val);
    this.Name = val
    
  }
}
