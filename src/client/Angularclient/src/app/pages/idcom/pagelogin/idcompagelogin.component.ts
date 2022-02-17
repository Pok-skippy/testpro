
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from  '@angular/common/http';
import { user } from './user';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'pagelogin',
  styleUrls: ['./idcompagelogin.component.scss'],
  templateUrl: './idcompagelogin.component.html',
})
export class PageLoginComponent {


constructor(){
this.myTypes = [];
this.myTypes.push({id:1, name :"val1"});
this.myTypes.push({id:2, name :"val2"});
this.myTypes.push({id:3, name :"val3"});

}

  title: string = 'Min första titel';
  user: string = "";
  pwd: string = "";

  placeHolderUser :string = "Email";
  placeHolderPwd :string = "Lösenord";
  httpHeaders :HttpHeaders ;
  testBoolean: boolean = false;
  bockcheck: boolean = false;
  bock: boolean = false;
  bock2 = true;
  status: NbComponentStatus = 'primary';
  information :string="Hej";
  login : string = "";
  klick: boolean = false;

  
  onBockChange(klick)
  {
   this.klick = !this.klick;
  }
 

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
 





onButtonClick()
  {
   this.testBoolean = !this.testBoolean;
  }


myTypes: MyListObj[];
mySelected: MyListObj = null;


mySelectedChanged(item :MyListObj)
{
this.mySelected = item;

}


/*
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

*/
  }


interface MyListObj {
  id: number;
  name: string;
}