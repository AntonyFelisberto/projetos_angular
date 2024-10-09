import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  product!:Product

  constructor(private productService:ProductService,
    private route:Router,
    private routeActive:ActivatedRoute){}

  ngOnInit(): void {
    const id = this.routeActive.snapshot.paramMap.get('id')
    if(id!==null){
      this.productService.readById(id).subscribe(
        product => {
          this.product = product
        }
      )
    }
  }

  updateProduct():void{
    this.productService.update(this.product).subscribe(
      () => {
        this.productService.showMessage("Produto atualizado")
        this.route.navigate(['/products'])
      }
    )

  }

  cancel():void{
    this.route.navigate(['/products'])
  }

}
