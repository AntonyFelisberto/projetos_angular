import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ModeloSchamaticsDataSource } from '../modelo-schamatics/modelo-schamatics-datasource';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit{

  products!:Product[]
  displayedColumns = ['id','name','price','action']

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.read().subscribe(
      products => {
        this.products = products
        console.log(this.products)
      }
    )
  }


}
