import { Component } from '@angular/core';
/*import {
  NgxPopoverCardComponent, NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from './popover.e.component';
*/

@Component({
  selector: 'pageregister',
  styleUrls: ['./idcompageregister.component.scss'],
  templateUrl: './idcompageregister.component.html',
})
export class PageRegisterComponent {

  constructor(){
    this.myTypes2 = [];
    this.myTypes2.push({id:1, name :"User"});
    this.myTypes2.push({id:2, name :"Moderator"});
    this.myTypes2.push({id:3, name :"Admin"});
    
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
  myTypes2: MyListObj2[];
  mySelected2: MyListObj2 = null;


  onBockChange(klick)
  {
   this.klick = !this.klick;
  }

  mySelectedChanged2(item :MyListObj2)
  {
  this.mySelected2 = item;
  
  }




}

interface MyListObj2 {
  id: number;
  name: string;
}
