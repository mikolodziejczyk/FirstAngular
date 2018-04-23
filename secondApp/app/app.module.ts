import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { MessagePresenterComponent } from './message-presenter/message-presenter.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageEditorComponent,
    MessagePresenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
