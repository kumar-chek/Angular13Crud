import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // we need to put these url in environments file and crearte a base url.

  postProduct(data : any){
    return this.http.post<any>("http://localhost:3000/productList/",data);
  }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/productList/");
  }

  putProduct(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/productList/"+id, data);
  }

  deleteProduct(id : number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id);
  }
}
