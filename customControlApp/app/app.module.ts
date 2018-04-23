import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { MyFormComponent } from './my-form/my-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
