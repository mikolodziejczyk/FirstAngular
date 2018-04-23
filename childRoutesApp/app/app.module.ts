import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LocationComponent } from './location/location.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LocationComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
