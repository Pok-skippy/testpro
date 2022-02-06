import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdcomLoginComponent } from './idcomlogin.component';
import { PageLoginComponent } from './pagelogin/idcompagelogin.component';


const routes: Routes = [
  {
    path: '',
    component: IdcomLoginComponent,
    children: [
      {
        path: 'pagelogin',
        component: PageLoginComponent,
      },
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