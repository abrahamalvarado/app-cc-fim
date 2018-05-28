import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public title = 'login';
  public user: any;
  constructor(private auth: AuthService){
    this.title = 'Iniciar sesión';
    this.user = new User('','','','','');
  }
  login() {
    let data = this.user;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      /*.then(
        () => this.navCtrl.parent.select(0),
        error => this.loginError = error.message
      );*/
      console.log(credentials);
  }
  
}
