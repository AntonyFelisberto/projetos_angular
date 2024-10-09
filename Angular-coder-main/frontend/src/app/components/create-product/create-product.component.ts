import { Router } from '@angular/router';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product = {
    name: '',
    price: 0
  };

  constructor(private productService:ProductService,
    private route:Router){}

  ngOnInit(): void {

  }

  createProduct():void{
    this.productService.create(this.product).subscribe(
      () => {
        this.productService.showMessage("Produto Criado")
        this.route.navigate(['/products'])
      }
    )

  }

  cancel():void{
    this.route.navigate(['/products'])
  }

}
