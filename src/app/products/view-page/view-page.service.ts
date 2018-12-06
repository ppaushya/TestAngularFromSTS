import { Injectable } from '@angular/core';
import { Products } from '../product';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ViewPageService  {
  private _productUrl = "http://localhost:8083/api/capStore";
  constructor(private _http:HttpClient) { }
  getProduct(productId: number) : Observable<Products>{
    return this._http.get<Products>(this._productUrl+"/"+productId)
        .do(data => console.log(data))
        //.do(data => console.log("all: "+JSON.stringify(data)))
        //.catch(this.handleError);

  }
  
}
