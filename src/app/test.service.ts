import { Injectable } from '@angular/core';
import { Ecommerce } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  data:any;
  p:Ecommerce
  setData(value)
  {
    this.data=value;
  }
  sendData(obj)
  {
    this.p=obj;
  }
  getObj(){
    return this.p;
  }
  getData(){
    return this.data;
  }
}
