import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { MessagePresenterComponent } from './message-presenter/message-presenter.component';


@NgModule({
  declarations: [
    AppComponent,
    EditMessageComponent,
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
