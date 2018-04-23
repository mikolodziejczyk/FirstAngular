import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonRendererComponent } from './person-renderer/person-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonRendererComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
