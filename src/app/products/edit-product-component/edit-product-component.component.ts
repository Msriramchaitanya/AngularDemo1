import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
interface IProduct{
  //ProductID:string
  ProductName:string
  //ProductPrice:string
  //ProductType:string

}

@Component({
  selector: 'app-edit-product-component',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})
export class EditProductComponentComponent implements OnInit {
  id: any;
  

  constructor(private service:SharedService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['productId'];
  }
  editProduct(data:IProduct){
    debugger;
    this.service.updateProduct(this.id,data).subscribe(res=>{
      console.log('sucess',res);
      this.router.navigate(['/products'])
    })
  }
}
