import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
interface Iproducts{
  ProductID:string
  ProductName:string
  ProductPrice:string
  ProductType:string

}
@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  constructor(private service:SharedService) { }
  ProductsList:any=[];
  msgTrue=false;
  
  displayedColumns: string[] = ['productID', 'productName', 'productPrice', 'productType','actions'];
  ngOnInit(): void {
    this.showProducts();
  
    
  }
  
  showProducts(){
    this.service.getProducts().subscribe(a=>{console.log(a);
      this.ProductsList=a.sort((a,b)=>a.productID-b.productID)})
  }
 

deleteProduct(productID: string): void {
    
  this.service.delete(productID).subscribe(res=>{
    this.showProducts();
    alert('Product('+productID+') deleted Successfully');
  })}
  editProduct(id:any,data:Iproducts){
    this.service.updateProduct(id,data).subscribe(res=>{
      console.log('sucess',res)
    })
  }

}
