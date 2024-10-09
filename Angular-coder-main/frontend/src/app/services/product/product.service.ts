import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { map,catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/models/product';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar:MatSnackBar,
    private http:HttpClient) { }

  showMessage(msg:string,isError:boolean = false):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e:any):Observable<any>{
    this.showMessage('Erro ocorrido',true)
    console.log(e)
    return EMPTY
  }

  create(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product).pipe(
      map((obj) => obj),                    //SE NÃO DER ERRO RETORNA ESSE OBJETO
      catchError(e => this.errorHandler(e)) //SE DER ERRO RETORNA EMPTY
    )
  }

  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id:string):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url,product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id:string):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

}
