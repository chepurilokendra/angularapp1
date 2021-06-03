import { Injectable, OnInit } from '@angular/core';
import { Ecommerce } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  //inject HTTPClient service object
  constructor(private hc:HttpClient) {
  }
  getEcommerceProducts():Observable<Ecommerce[]>{  

    
    return this.hc.get<Ecommerce[]>("https://v1-sneakers.p.rapidapi.com/v1/sneakers",{
        "headers":{
            "x-rapidapi-key": "cf56cd5186mshc5d72bcce83688bp137975jsn27c62298df44",
            "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",    
        },
        "params":{
            "limit":"100"
        }

        });
  }; 
}