import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KdrBasePageComponent} from './page/base.component';
import {KdrTopPageComponent} from './page/kdr-top/kdr-top-page.component';

const routes: Routes = [
  {path: '', component: KdrBasePageComponent, pathMatch: 'full'}
  , {path: '404', redirectTo: '/top'}
  , {path: 'top', component: KdrTopPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
