import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PageLoginComponent } from './pagelogin/idcompagelogin.component';
// import { PageRegisterComponent } from './pageregister/idcompageregister.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { IdcomLoginRoutingModule } from './idcomlogin-routing.module';
import { IdcomLoginComponent } from './idcomlogin.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    IdcomLoginRoutingModule,
    // IdcomRegisterRoutingModule,  
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    IdcomLoginComponent,
    PageLoginComponent,
    // IdcomRegisterRoutingModule,
  ],
})
export class IdcomLoginModule { }
export class IdcomRegisterModule { }
