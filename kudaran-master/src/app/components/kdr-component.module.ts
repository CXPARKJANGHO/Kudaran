import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {KdrBoardComponent} from './kdr-board/kdr-board.component';
import {KdrTagListComponent} from './kdr-tag-list/kdr-tag-list.component';
import {KdrProfileTreyComponent} from './kdr-profile-trey/kdr-profile-trey.component';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
  ],
  declarations: [
    KdrProfileTreyComponent
    , KdrTagListComponent
    , KdrBoardComponent
  ],
  exports: [
    KdrProfileTreyComponent
    , KdrTagListComponent
    , KdrBoardComponent
  ],
  providers: []
  , schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KdrComponentModule {
}
