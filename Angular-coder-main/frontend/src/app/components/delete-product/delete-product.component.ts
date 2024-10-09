import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  product!:Product
  id!:string

  constructor(private productService:ProductService,
    private route:Router,
    private routeActive:ActivatedRoute){}

  ngOnInit(): void {
    const id = this.routeActive.snapshot.paramMap.get('id')
    if(id!==null){
      this.productService.readById(id).subscribe(
        product => {
          this.product = product
          this.id = id
        }
      )
    }
  }

  deleteProduct():void{
    this.productService.delete(this.id).subscribe(
      () => {
        this.productService.showMessage("Produto deletado")
        this.route.navigate(['/products'])
      }
    )
  }

  cancel():void{
    this.route.navigate(['/products'])
  }
}
