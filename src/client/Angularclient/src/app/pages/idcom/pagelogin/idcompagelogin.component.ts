
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from  '@angular/common/http';
import { user } from './user';
import { PageLoginComponentService } from './idcompagelogin.service';


@Component({
  selector: 'pagelogin',
  styleUrls: ['./idcompagelogin.component.scss'],
  templateUrl: './idcompagelogin.component.html',
})
export class PageLoginComponent {


constructor(public service: PageLoginComponentService){
this.myTypes = [];
this.myTypes.push({id:1, name :"User"});
this.myTypes.push({id:2, name :"Moderator"});
this.myTypes.push({id:3, name :"Admin"});

}

  title: string = 'Min första titel';
  pwd: string = "";

  placeHolderUser :string = "Email";
  placeHolderPwd :string = "Lösenord";
  httpHeaders :HttpHeaders ;
  testBoolean: boolean = false;
  bockcheck: boolean = false;
  bock: boolean = false;
  bock2 = true;
  information :string="Hej";
  login : string = "";
  klick: boolean = false;
 
  
onBockChange(klick)
  {
   this.klick = !this.klick;
  }
  
onButtonClick()
  {
    var i = 0;

  }
  count=0;
  counter(type:string){
    type==='add'?this.count++:this.count--
  }

 while (count = 10) {
    if (count >= 10) {
      count = 0
      this.count = 0
    }
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