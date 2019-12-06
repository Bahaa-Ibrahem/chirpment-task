import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../ViewModels/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  
  constructor(private httpClient : HttpClient) {}

   ngOnInit(): void { }

   insertnumbers(newNums){
     let num1 = newNums.num1,
         num2 = newNums.num2;
      const httpOptions = 
    {headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept':' */*'   })};
     return this.httpClient.get(`http://localhost:3000/AddNumbers/${num1}/${num2}`,httpOptions);
    } 
    
    insertarray(nums){
       const httpOptions = 
     {headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept':' */*'   })};
      return this.httpClient.post(`http://localhost:3000/FindAverage`,nums,httpOptions);
     } 
}
