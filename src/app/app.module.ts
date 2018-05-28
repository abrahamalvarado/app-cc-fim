import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import modules
import { AuthModule } from './auth-module/auth.module'

//components
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
