
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from  '@angular/common/http';
import { user } from './user';

@Component({
  selector: 'pagelogin',
  styleUrls: ['./idcompagelogin.component.scss'],
  templateUrl: './idcompagelogin.component.html',
})
export class PageLoginComponent {

  user: string = "";
  pwd: string = "";

  placeHolderUser :string = "Email";
  placeHolderPwd :string = "Lösenord";
  httpHeaders:HttpHeaders ;

 

httpParams: HttpParams;

  constructor(private http: HttpClient){
    this.httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    this.httpParams = new HttpParams();
  }

   login(){
     try{
    
       var res = this.http.get<user>("https://localhost:44340/api/login?usr=" +this.user +"&pwd=" +this.pwd);
         res.forEach(u =>{
             u=u;
         });
     }catch(ex){
      ex = ex;
     }
   }


  }


