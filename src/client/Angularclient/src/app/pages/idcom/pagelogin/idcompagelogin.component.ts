
import { Component } from '@angular/core';

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

  PageLoginComponent(){

  }

   login(){
     alert("Login: " + this.user);
   }


  }


