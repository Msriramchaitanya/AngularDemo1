import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

interface Iproducts{
  ProductID:string
  ProductName:string
  ProductPrice:string
  ProductType:string

}
const message:any = '';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    
  }
  addProducts(payload:Iproducts){
    this.service.postProducts(payload).subscribe(res=>{
      console.log('sucess',res)
      
    })
  }
 // update(updateinfo:Iproducts,form:any){
   // console.log(form.value.ProductId);
    //const ProductID={ProductID:form.value.ProductId}
    //this.service.updateProduct(ProductID,updateinfo).subscribe(res=>console.log('sucess',res))
  //}
}
