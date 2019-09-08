import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  AccordionModule,
  BsDatepickerModule, BsDropdownModule, ModalModule, PaginationModule,
  TooltipModule
} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import {KdrBasePageComponent} from './base.component';
import {KdrTopPageComponent} from './kdr-top/kdr-top-page.component';
import {KdrComponentModule} from '../components/kdr-component.module';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , RouterModule
    , KdrComponentModule
  ]
  , declarations: [
    KdrBasePageComponent
    , KdrTopPageComponent
  ]
  , exports: [
    KdrBasePageComponent
    , KdrTopPageComponent
  ]
  , providers: [
    // ApiService
    // , HttpService
  ]
  , schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KdrPageModule {
}
