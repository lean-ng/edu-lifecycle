import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InitHookComponent } from './init-hook/init-hook.component';
import { ChangesHookComponent } from './changes-hook/changes-hook.component';
import { DestroyHookComponent } from './destroy-hook/destroy-hook.component';
import { CheckHookComponent } from './check-hook/check-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    InitHookComponent,
    ChangesHookComponent,
    DestroyHookComponent,
    CheckHookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
