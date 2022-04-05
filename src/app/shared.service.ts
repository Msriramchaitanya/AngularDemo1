import { Injectable } from '@angular/core';
//import { from } from 'rxjs';
import { IProduct } from './iproduct';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
ApiUrl="https://localhost:5001/api";
  constructor(private http:HttpClient) { }
  getProducts():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Products')
  }
  postProducts(payload:any){
    return this.http.post(this.ApiUrl+'/Products',payload);
  }
 //updateProduct(updateinfo:any,ProductID:any){
  //  const FinalUrl='https://localhost:5001/api/Products'+ProductID
   // return this.http.put(FinalUrl,updateinfo);
  //}
 updateProduct(id:any,data:any): Observable<any>{
   const baseUrl="https://localhost:5001/api/Products"
 
   return this.http.put(`${baseUrl}/${id}`, data);
 }
 getById(id: string): Observable<IProduct> {
  return this.http.get<IProduct>(this.ApiUrl + '/Products/' + id)
  
  
}
 delete(id: any) {
  //const baseUrl="https://localhost:5001/api/Products"
  return this.http.delete(this.ApiUrl + '/Products/' + id)
}
   
  
 // getComments(){}
 //createContact(createResources:any){
   //return this.http.post(this.ApiUrl+'Products',createResources)
 //}
}
