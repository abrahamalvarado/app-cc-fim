import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']
})
export class ListadousuariosComponent implements OnInit {
  usuarios: any = {name: 'Abraham', email: 'abraham-alvarado@hotmail.com', phone: '6681562126', permission: 'Administrador'};
  users: any[] = Array.of(this.usuarios);
  constructor() {
  }

  ngOnInit() {
  }

}
