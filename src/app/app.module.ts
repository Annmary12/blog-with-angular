import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// pages
import { HomeComponent } from './pages/home/home.component';

// components
import { NavBarComponent } from './components/NavBar/nav-bar.component';

@NgModule({
  imports: [
  BrowserModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
