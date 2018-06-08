import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth-module/services/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor( private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  logout(): void {
    this.auth.signOut().then(() =>{
      this.router.navigate(['home'])
    });
  }

}
