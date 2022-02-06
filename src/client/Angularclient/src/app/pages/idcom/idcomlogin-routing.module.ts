import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdcomLoginComponent } from './idcomlogin.component';
import { PageLoginComponent } from './pagelogin/idcompagelogin.component';
//import { PageRegisterComponent } from './pageregister/idcompageregister.component';


const routes: Routes = [
  {
    path: '',
    component: IdcomLoginComponent,
    children: [
      {
        path: 'pagelogin',
        component: PageLoginComponent,
      },
 /*     {
        path: 'pageregister',
        component: PageRegisterComponent,
      },
*/
    ],

  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class IdcomLoginRoutingModule {
}