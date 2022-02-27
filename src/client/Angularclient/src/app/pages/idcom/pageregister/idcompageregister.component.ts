import { Component } from '@angular/core';

@Component({
  selector: 'pageregister',
  styleUrls: ['./idcompageregister.component.scss'],
  templateUrl: './idcompageregister.component.html',
})
export class PageRegisterComponent {

  constructor(){
    this.myTypes = [];
    this.myTypes.push({id:1, name :"User"});
    this.myTypes.push({id:2, name :"Moderator"});
    this.myTypes.push({id:3, name :"Admin"});
    
    }


  title: string = 'Min första titel';
  user: string = "";
  pwd: string = "";
  bePwd: string = "";
  placeHolderUser :string = "Email";
  placeHolderPwd :string = "Lösenord";
  placeHolderBePwd :string = "Bekräfta";
  klick: boolean = false;
  bockcheck: boolean = false;
  myTypes: MyListObj[];
  mySelected: MyListObj = null;


  onBockChange(klick)
  {
   this.klick = !this.klick;
  }

  mySelectedChanged(item :MyListObj)
  {
  this.mySelected = item;
  
  }




}

interface MyListObj {
  id: number;
  name: string;
}
