//Import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import components

import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/sign-in/sign-in.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  imports: [CommonModule],
  declarations : [
    LoginComponent,
    SigninComponent,
    AuthComponent
  ],
  exports: [AuthComponent]
})

export class AuthModule {}
