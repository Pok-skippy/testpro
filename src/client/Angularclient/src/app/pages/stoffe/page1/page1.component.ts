import { Component } from '@angular/core';

@Component({
  selector: 'page1',
  styleUrls: ['./page1.component.scss'],
  templateUrl: './page1.component.html',
})
export class Page1Component {

  myVar: string = "BLAJ";

  counter = 0;

  Page1Component(){

  }


  btnClicked(param1){
    this.counter = this.counter +1;
    if (this.myVar == 'HEPP')
      param1 = "BLAJ";
    this.myVar = param1;
  }




}
