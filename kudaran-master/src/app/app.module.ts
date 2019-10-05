import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { KensakuComponent } from './kensaku/kensaku.component';
import { NoticeComponent } from './notice/notice.component';
import { UserPictureComponent } from './user-picture/user-picture.component';
import { UserConnectComponent } from './user-connect/user-connect.component';
import { TagCollectionComponent } from './tag-collection/tag-collection.component';
import { NotifyComponent } from './notify/notify.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    KensakuComponent,
    NoticeComponent,
    UserPictureComponent,
    UserConnectComponent,
    TagCollectionComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
