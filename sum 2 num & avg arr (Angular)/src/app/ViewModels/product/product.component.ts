import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   result1;
   result2;
   val1:string;
   val2:string;
   val3:string;
  constructor(private productAPI : ProductService,private router : Router,private activeRoute:ActivatedRoute,private http: HttpClient) {  
  }

  ngOnInit() {
 }
  addnumbers(data){
    this.productAPI.insertnumbers({
      num1: data.value.num1,
      num2: data.value.num2,
      }).subscribe((res) => {
        this.val1='';
        this.val2='';
        this.result1 = res;
    })
  } 
  arr = new Array();
  addarray(nums){
    let nu = nums.value.number;
    this.val3 = '';
    this.arr = this.arr.concat(nu);
  }
  savearray(){
    this.productAPI.insertarray({
      numbers: this.arr
      }).subscribe((res) => {
        this.result2 =(res);
    })
  }  
}
