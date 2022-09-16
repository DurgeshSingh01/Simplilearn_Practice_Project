import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp3Component } from './comp3/comp3.component';
import { Child3Component } from './child3/child3.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp7Component } from './comp7/comp7.component';
import { Comp6Component } from './comp6/comp6.component';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp4Component,
    Comp3Component,
    Child3Component,
    Comp5Component,
    Comp7Component,
    Comp6Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }