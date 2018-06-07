//Import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Import components
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/sign-in/sign-in.component';
import { AuthComponent } from './components/auth/auth.component';

//Services
import { AuthService } from './services/auth.service';

//Server modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireAuthModule,
  ],
  declarations : [
    LoginComponent,
    SigninComponent,
    AuthComponent
  ],
  providers: [
    AuthService,
    AngularFireAuth,
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    SigninComponent
  ]
})

export class AuthModule {}
