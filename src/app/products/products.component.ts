import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import{ DataService } from '../data.service'
import { Ecommerce, Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  myProducts:Ecommerce[]
  myResults=[]
 load=false
 x=0
 LoadComponent(k:number){
   if(k==0){
    this.x=1
    this.load=true
    return this.load
   }
   else{
     this.load=false
     return this.load
   }
 }
  constructor(private dsObj:DataService) { }
   ngOnInit(): void {
     this.dsObj.getEcommerceProducts().subscribe(
       productsData => {
         //assign posts
         this.myProducts=productsData;
 
 
         this.myResults=this.myProducts['results'];
         console.log(this.myResults)
         
 
       
       },
       err => {
         console.log("error is ",err);
       }
     )
   }
   
 
 }
 
