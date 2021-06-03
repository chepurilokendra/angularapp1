import { Component, Input,OnInit } from '@angular/core';
import { Ecommerce } from '../models/product.model';
import{ TestService } from '../test.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input () ProductObj:Ecommerce;
}
